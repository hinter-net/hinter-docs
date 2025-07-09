// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    'quickstart',
    'placeholder',
    {
      type: 'category',
      label: 'hinter-core',
      items: ['hinter-core/placeholder'],
    },
    {
      type: 'category',
      label: 'hinter-cline',
      items: ['hinter-cline/placeholder'],
    },
  ],
};

export default sidebars;
