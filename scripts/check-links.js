const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

const docsDir = path.resolve(__dirname, '../docs'); // Adjust to the correct relative path from the script to your docs directory
const mdParser = new markdownIt();

// Helper function to normalize paths and check case-sensitive existence
function fileExistsWithCase(filePath) {
    const dir = path.dirname(filePath);
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
        const filenames = fs.readdirSync(dir);
        const baseName = path.basename(filePath);
        return filenames.some(file => file === baseName);
    }
    return false;
}

// Function to generate a unique section ID
function generateSectionId(baseId, sectionCounts) {
    const count = sectionCounts[baseId] || 0;
    sectionCounts[baseId] = count + 1;
    return count > 0 ? `${baseId}-${count}` : baseId;
}

// Function to get all markdown files from the directory
function getMarkdownFiles(dir) {
    let files = [];
    try {
        fs.readdirSync(dir).forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                files = files.concat(getMarkdownFiles(fullPath));
            } else if (file.endsWith('.md')) {
                files.push(fullPath);
            }
        });
    } catch (err) {
        console.error(`Error reading directory: ${dir}`, err.message);
    }
    return files;
}

// Function to extract all section IDs from a file
function extractSectionIds(filePath) {
    const markdown = fs.readFileSync(filePath, 'utf8');
    const lines = markdown.split('\n');
    const sections = new Set();
    const sectionCounts = {};

    const sectionRegex = /^#{2,6}\s+(.*)$/;
    lines.forEach((line) => {
        const sectionMatch = sectionRegex.exec(line);
        if (sectionMatch) {
            const baseId = sectionMatch[1]
                .trim()
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            const sectionId = generateSectionId(baseId, sectionCounts);
            sections.add(`#${sectionId}`);
        }
    });

    return sections;
}

// Extract sections from all markdown files
const allSectionsByFile = {};
const markdownFiles = getMarkdownFiles(docsDir);
markdownFiles.forEach(filePath => {
    allSectionsByFile[filePath] = extractSectionIds(filePath);
});

// Function to check links within a single file and include line numbers
function checkLinksInFile(filePath) {
    const markdown = fs.readFileSync(filePath, 'utf8');
    const lines = markdown.split('\n');
    const links = [];
    const sections = allSectionsByFile[filePath];

    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const mdImgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let match;

    lines.forEach((line, lineNumber) => {
        // Extracting Markdown links
        while ((match = mdLinkRegex.exec(line))) {
            if (match[0].charAt(0) !== '!') {
                links.push({ type: 'Markdown link', url: match[2], line: lineNumber + 1 });
            }
        }

        // Extracting Markdown images
        while ((match = mdImgRegex.exec(line))) {
            links.push({ type: 'Markdown image', url: match[2], line: lineNumber + 1 });
        }

        // Extracting HTML links
        const htmlLinkRegex = /href="([^"]+)"/g;
        while ((match = htmlLinkRegex.exec(line))) {
            links.push({ type: 'HTML link', url: match[1], line: lineNumber + 1 });
        }

        // Extracting HTML images
        const htmlImgRegex = /src="([^"]+)"/g;
        while ((match = htmlImgRegex.exec(line))) {
            links.push({ type: 'HTML image', url: match[1], line: lineNumber + 1 });
        }

        // Extracting images from require statements
        const requireRegex = /src=\{?require\(['"]([^'"]+)['"]\).default\}?/g;
        while ((match = requireRegex.exec(line))) {
            links.push({ type: 'HTML image', url: match[1], line: lineNumber + 1 });
        }
    });

    // Checking each extracted link and classifying them by file
    const brokenLinks = [];
    links.forEach(linkObj => {
        const url = linkObj.url;
        if (!url.startsWith('#')) {
            // Check if it's a cross-file section link
            const [linkPath, sectionId] = url.split('#');
            const resolvedPath = path.resolve(path.dirname(filePath), linkPath);

            if (!fileExistsWithCase(resolvedPath)) {
                brokenLinks.push(linkObj);
            } else if (sectionId && !allSectionsByFile[resolvedPath]?.has(`#${sectionId}`)) {
                // Debugging output for section not found
                brokenLinks.push({
                    ...linkObj,
                    missingSection: `#${sectionId}`,
                    targetFile: resolvedPath
                });
            }
        } else if (!sections.has(url)) {
            brokenLinks.push(linkObj);
        }
    });

    return brokenLinks;
}

// Ensure the docs directory exists
if (!fs.existsSync(docsDir)) {
    console.error(`The directory ${docsDir} does not exist.`);
    process.exit(1);
}

// Object to store broken links and images by file
const brokenLinksByFile = {};

// Check links in all markdown files
markdownFiles.forEach(filePath => {
    const brokenLinks = checkLinksInFile(filePath);
    if (brokenLinks.length > 0) {
        brokenLinksByFile[filePath] = brokenLinks;
    }
});

// Output the results
for (const file in brokenLinksByFile) {
    console.log(`\nIn file: ${file}`);
    brokenLinksByFile[file].forEach(link => {
        if (link.missingSection) {
            console.error(`Broken ${link.type} found: ${link.url} at line ${link.line}`);
            console.error(`\tSection not found: ${link.missingSection} in ${link.targetFile}`);
        } else {
            console.error(`Broken ${link.type} found: ${link.url} at line ${link.line}`);
        }
    });
}
