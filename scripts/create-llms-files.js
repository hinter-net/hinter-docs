const fs = require('fs');
const path = require('path');
const sidebars = require('../sidebars.js');

const docsDir = path.join(__dirname, '..', 'docs');
const staticDir = path.join(__dirname, '..', 'static');
const llmsTxtPath = path.join(staticDir, 'llms.txt');
const llmsFullTxtPath = path.join(staticDir, 'llms-full.txt');

function getMarkdownFiles(items) {
  let files = [];
  for (const item of items) {
    if (typeof item === 'string') {
      files.push(item);
    } else if (item.type === 'category') {
      files = files.concat(getMarkdownFiles(item.items));
    }
  }
  return files;
}

function generateLlmsTxt() {
  let content = '# Hinter.Net\n\n';
  content += `> Hinter.Net is a peer-to-peer network for collaborative intelligence. It combines a secure, decentralized communication protocol (hinter-core) with a powerful, AI-assisted command center (hinter-cline) to help users build high-trust, private networks for sharing and contextualizing sensitive information.\n\n`;

  const order = ['hinterNet', 'hinterCore', 'hinterCline'];

  for (const key of order) {
    const sidebar = sidebars[key];
    if (sidebar) {
      const category = sidebar.find(item => item.type === 'category');
      if (category) {
        content += `## ${category.label}\n\n`;
        const files = getMarkdownFiles(category.items);
        for (const file of files) {
          const mdPath = path.join(docsDir, `${file}.md`);
          const mdxPath = path.join(docsDir, `${file}.mdx`);
          const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null;

          if (filePath) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const match = fileContent.match(/---\s*sidebar_label:\s*"(.*?)"\s*---/);
            const title = match ? match[1] : path.basename(file, '.md');
            content += `- [${title}](https://hinter.net/docs/${file})\n`;
          }
        }
        content += '\n';
      }
    }
  }

  fs.writeFileSync(llmsTxtPath, content);
  console.log(`Successfully created ${llmsTxtPath}`);
}

function generateLlmsFullTxt() {
  const llmsTxtContent = fs.readFileSync(llmsTxtPath, 'utf-8');
  const links = llmsTxtContent.match(/- \[(.*?)\]\((.*?)\)/g);
  let fullContent = '';

  if (links) {
    for (const link of links) {
      const match = link.match(/- \[(.*?)\]\((.*?)\)/);
      if (match) {
        const url = match[2];
        const relativeUrl = new URL(url).pathname;
        const docPath = path.join(__dirname, '..', relativeUrl.substring(1));
        const mdPath = docPath + '.md';
        const mdxPath = docPath + '.mdx';
        const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null;

        if (filePath) {
          let fileContent = fs.readFileSync(filePath, 'utf-8');
          fileContent = fileContent.replace(/---[\s\S]*?---/, '').trim();
          const relativePath = path.relative(path.join(__dirname, '..'), filePath);
          const lines = fileContent.split('\n');
          const firstLineIndex = lines.findIndex(line => line.trim() !== '');
          if (firstLineIndex !== -1) {
            lines[firstLineIndex] = `${lines[firstLineIndex]} (${relativePath})`;
          }
          fullContent += lines.join('\n') + '\n\n';
        }
      }
    }
  }

  fs.writeFileSync(llmsFullTxtPath, fullContent);
  console.log(`Successfully created ${llmsFullTxtPath}`);
}

function main() {
  try {
    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: true });
    }
    generateLlmsTxt();
    generateLlmsFullTxt();
  } catch (err) {
    console.error('Error creating llms files:', err);
    process.exit(1);
  }
}

main();
