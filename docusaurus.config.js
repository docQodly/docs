// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const ghUrl = `${process.env.GITHUB_SERVER_URL || 'https://github.com'}/${process.env.GITHUB_REPOSITORY || 'qodly/docs'}`;
const isProduction = process.env.GITHUB_REPOSITORY_OWNER === 'qodly';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Qodly Developer Center',
  tagline: 'Welcome to the Qodly Documentation',
  url: isProduction ? "https://developer.qodly.com" : "https://docqodly.github.io",
  baseUrl: "/docs/",
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'docQodly', // Usually your GitHub org/user name.
  projectName: 'qodly', // Usually your repo name.
  noIndex: !isProduction,
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
  },
  markdown: {
    format: 'mdx',
    mermaid: true,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    anchors: {
      maintainCase: false,
    },
  },
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // Options here
    }],
    function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: isProduction ? `${ghUrl}/edit/main`: undefined,
          //editUrl: `${ghUrl}/edit/main`,
          editUrl: function edit(info) {
            // const lang = info.locale;
            // const version = info.version;
            // const permalink = info.permalink;

            const title = `Comment on ${info.docPath} (${info.version})`;
            const body = `Share any feedback about this page — report issues, suggest improvements, or tell us what’s helpful.

If it’s an issue:
- What’s the issue? (e.g., typo, incorrect information, unclear explanation)
- Where is it? (e.g., section name, specific paragraph, or line)

Thank you for helping us improve! 🚀
              `;
            return `https://github.com/qodly/docs/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
          },
          
          includeCurrentVersion: isProduction ? false : true, // false for prod only
        },
        blog: {
          //  showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ghUrl,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: isProduction ? {
          trackingID: 'G-391275429',
          anonymizeIP: true,
        } : null,
      }),
    ],
  ],
  scripts: isProduction ? [
    {
      src: "/docs/" + 'js/analytics/analytics.js', //depends on baseUrl
      async: true,
    },
  ] : [],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // docs: {
      //   sidebar: {
      //     hideable: true,
      //   },
      // },
      navbar: {
        title: 'Docs', //Docs
        logo: {
          alt: 'Qodly',
          //src: 'img/qodly-logo-dark.svg',
          //srcDark: 'img/qodly-logo-white.svg',
          src: 'img/qodly-light-version.svg',
          srcDark: 'img/qodly-dark-version.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'get-started/quickstart',
            position: 'left',
            label: 'Getting Started',
          },
          /*{
            type: 'doc',
            docId: 'cloud/getStarted',
            position: 'left',
            label: 'console',
          },*/
          {
            type: 'doc',
            docId: 'studio/overview',
            position: 'left',
            label: 'Develop',
          },
          {
            type: 'doc',
            docId: 'cloud/consoleOverview',
            position: 'left',
            label: 'Run & Manage',
          },
          {
            type: 'doc',
            docId: 'api/overview',
            position: 'left',
            label: 'REST API',
          },
          {
            type: "doc",
            docId: "customComponent/overview",
            position: "left",
            label: "Custom Components",
          },
          {
            type: "doc",
            position: "left",
            docId: "faq/faq",
            label: "FAQ",
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            //dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: false,
          },  
          /*
            {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/docQodly/docs',
              label: 'GitHub',
              position: 'right',
            },
          */
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Support",
            items: [
              {
                label: "Tutorials",
                to: "https://qodly.com/tutorials",
              },
              {
                label: "Get Support",
                to: "https://support.4d.com/",
              },
              {
                label: "Release Notes",
                to: "notes/1.0.0",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About Qodly",
                to: "https://qodly.com/about-us",
              },
              {
                label: "About 4D",
                to: "https://us.4d.com/about-us",
              },
              {
                label: "Contact us",
                to: "mailto:contact@qodly.com",
              },
              {
                label: "License",
                to: "https://qodly.com/qodly-platform-license",
              },
              {
                label: "SLA",
                to: "https://qodly.com/qodly-beta-service-level-agreement",
              }
            ],
          },
          {
            title: "Follow Us",
            items: [
              {
                label: "Slack",
                to: "https://join.slack.com/t/qodly/shared_invite/zt-20ieeffts-NU57SOXcbakmWgIMnJpStQ",
                src: 'slack',
              },
              {
                label: "Facebook",
                to: "https://www.facebook.com/qodlyby4d",
                src: 'facebook',
              },
              {
                label: "Twitter",
                to: "https://twitter.com/qodlyby4d",
                src: 'twitter',
              },
              {
                label: "Youtube Channels",
                to: "https://www.youtube.com/channel/UCLNHKvjJQZ_5D1ziskba6jg",
                src: 'youtube',
              },
              {
                label: "Linkedin",
                to: "https://linkedin.com/showcase/qodly",
                src: 'linkedin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 4D SAS - All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
