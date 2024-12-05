const { mkdirSync, writeFileSync } = require('fs');

const [,,lib, version = 'latest'] = process.argv

const name = lib.split('/')[1]

mkdirSync(`${process.cwd()}/docs/customComponent/api-reference/${name}`, {
    recursive: true
})

console.log(`Fetching:
    https://registry.npmjs.com/${lib}/${version}
    https://unpkg.com/${lib}@${version}/docs/api.mdx`);

Promise.all([
    fetch(`https://registry.npmjs.com/${lib}/${version}`),
    fetch(`https://unpkg.com/${lib}@${version}/docs/api.mdx`)
]).then(([first, second]) => {
    return Promise.all([first.json(), second.text()])
}).then(([{ version }, docs]) => {
    writeFileSync(`${process.cwd()}/docs/customComponent/api-reference/${name}/v${version}.mdx`, docs, { encoding: 'utf-8' })
})