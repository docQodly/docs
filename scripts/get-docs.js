const { mkdirSync, writeFileSync, readFileSync } = require("fs");

const [, , lib, version = "latest"] = process.argv;

const name = lib.split("/")[1];

mkdirSync(`${process.cwd()}/docs/customComponent/api-reference/${name}`, {
  recursive: true,
});

console.log(`Fetching:
    https://registry.npmjs.com/${lib}/${version}
    https://unpkg.com/${lib}@${version}/docs/api.mdx`);

const findPosition = (search, text, isAllOccurencies = false) => {
  const chunks = text.split("\n");
  const result = [];

  for (let i = 0; i < chunks.length; i++) {
    const index = chunks[i].indexOf(search);
    if (index !== -1) {
      const position = {
        line: i,
        column: index,
      };
      if (isAllOccurencies) {
        result.push(position);
      } else {
        return position;
      }
    }
  }

  return isAllOccurencies
    ? result
    : {
        line: -1,
        column: -1,
      };
};

const insertLine = (file, line, options = {}) => {
  const { tagName = "tag", anchor = "start", sep = "\t" } = options;
  const content = readFileSync(file, "utf-8");
  const position = findPosition(
    `// @${anchor} ${tagName}`,
    content
  );

  if (position.line === -1) {
    console.warn(`"${line}" not found in ${file}`);
    return;
  }

  const lines = content.split("\n");
  const index = position.line + (anchor === "start" ? 1 : 0);
  const newContent = [
    ...lines.slice(0, index),
    sep.repeat(position.column) + line,
    ...lines.slice(index),
  ];

  writeFileSync(file, newContent.join("\n"), { encoding: "utf-8" });
};

Promise.all([
  fetch(`https://registry.npmjs.com/${lib}/${version}`),
  fetch(`https://unpkg.com/${lib}@${version}/docs/api.mdx`),
])
  .then(([first, second]) => {
    return Promise.all([first.json(), second.text()]);
  })
  .then(([{ version }, docs]) => {
    writeFileSync(
      `${process.cwd()}/docs/customComponent/api-reference/${name}/v${version}.mdx`,
      docs,
      { encoding: "utf-8" }
    );
    insertLine(
      "sidebars.js",
      `'customComponent/api-reference/${name}/v${version}',`,
      {
        tagName: `custom-components@${name}`,
        anchor: "start",
        sep: "\t",
      }
    );
  });
