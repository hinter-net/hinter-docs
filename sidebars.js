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
  hinterNet: [
    {
      type: 'category',
      label: 'Hinter Net',
      collapsible: false,
      items: [
        'hinter-net/introduction',
        'hinter-net/use-cases',
        'hinter-net/quickstart',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'hinter-net/core-concepts/curate-intelligence',
            'hinter-net/core-concepts/exchange-reports',
            'hinter-net/core-concepts/reputation-network',
          ],
        },
        'hinter-net/design-philosophy',
        'hinter-net/roadmap',
        'hinter-net/get-involved',
      ],
    },
  ],
  hinterCore: [
    {
      type: 'category',
      label: 'hinter-core',
      collapsible: false,
      items: [
        'hinter-core/introduction',
        'hinter-core/user-guide',
        'hinter-core/design-and-protocol',
        'hinter-core/security-practices',
        'hinter-core/troubleshooting',
      ],
    },
  ],
  hinterCline: [
    {
      type: 'category',
      label: 'hinter-cline',
      collapsible: false,
      items: [
        'hinter-cline/introduction',
        'hinter-cline/user-guide',
        'hinter-cline/workflows',
        'hinter-cline/security-practices',
      ],
    },
  ],
};

module.exports = sidebars;
