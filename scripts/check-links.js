const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

const docsPath = '../docs'; // Adjust to the correct relative path from the script to your docs directory
const mdParser = new markdownIt();

// Helper function to normalize paths and check case-sensitive existence
function fileExistsWithCase(filePath) {
    const dir = path.dirname(filePath);
    if (fs.existsSync(dir)) {
        const filenames = fs.readdirSync(dir);
        const baseName = path.basename(filePath);
        return filenames.some(file => file === baseName);
    }
    return false;
}

// Function to get all markdown files from the directory
function getMarkdownFiles(dir) {
    let files = [];
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            files = files.concat(getMarkdownFiles(fullPath));
        } else if (file.endsWith('.md')) {
            files.push(fullPath);
        }
    });
    return files;
}

// Function to check links within a single file
function checkLinksInFile(filePath) {
    const markdown = fs.readFileSync(filePath, 'utf8');
    const links = [];

    // Extracting Markdown links and images
    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const mdImgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let match;

    // Extracting Markdown links
    while ((match = mdLinkRegex.exec(markdown))) {
        if (match[0].charAt(0) !== '!') {
            links.push({ type: 'Markdown link', url: match[2] });
        }
    }

    // Extracting Markdown images
    while ((match = mdImgRegex.exec(markdown))) {
        links.push({ type: 'Markdown image', url: match[2] });
    }

    // Regular expressions to extract links and images from HTML embedded in Markdown
    const htmlLinkRegex = /href="([^"]+)"/g;
    const htmlImgRegex = /src="([^"]+)"/g;
    const requireRegex = /src=\{?require\(['"]([^'"]+)['"]\).default\}?/g;

    // Extracting HTML links
    while ((match = htmlLinkRegex.exec(markdown))) {
        links.push({ type: 'HTML link', url: match[1] });
    }

    // Extracting HTML images
    while ((match = htmlImgRegex.exec(markdown))) {
        links.push({ type: 'HTML image', url: match[1] });
    }

    // Extracting images from require statements
    while ((match = requireRegex.exec(markdown))) {
        links.push({ type: 'HTML image', url: match[1] });
    }

    // Checking each extracted link and classifying them by file
    const brokenLinks = [];
    links.forEach(linkObj => {
        const resolvedPath = path.resolve(path.dirname(filePath), linkObj.url);
        if (!fileExistsWithCase(resolvedPath)) {
            brokenLinks.push(linkObj);
        }
    });

    return brokenLinks;
}

// Get all markdown files in the docs directory
const markdownFiles = getMarkdownFiles(docsPath);

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
        console.error(`Broken ${link.type} found: ${link.url}`);
    });
}
