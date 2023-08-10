// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Qodly Developer Center',
  tagline: 'Welcome to the Qodly Documentation',
  url: "https://docQodly.github.io",
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'docQodly', // Usually your GitHub org/user name.
  projectName: 'qodly', // Usually your repo name.
  noIndex: true,
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
          editUrl:
            "https://github.com/docQodly/docs/edit/main",
        },
        blog: {
        //  showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/docQodly/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docs', //Docs
        logo: {
          alt: 'Qodly',
          src: 'img/qodly-logo-dark.svg',
		  srcDark: 'img/qodly-logo-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'concepts/platform',
            position: 'left',
            label: 'Getting Started',
          },
  		  {
            type: 'doc',
            docId: 'cloud/overview-cloud',
            position: 'left',
            label: 'Dashboard',
          },

		  /*{
            type: 'doc',
            docId: '/category/concepts',
            position: 'left',
            label: 'Platform',
          },*/
		  {
            type: 'doc',
            docId: 'studio/overview',
            position: 'left',
            label: 'Studio',
          },
		   {
            type: 'doc',
            docId: 'orda/overview',
            position: 'left',
            label: 'Programming',
          },
		
		 /*{
            type: 'doc',
            docId: '/category/API',
            position: 'left',
            label: 'API',
          },
		  */
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
          title: "Community",
          items: [
            {
              label: "4D Blog",
              to: "https://blog.4d.com",
            },
            {
              label: "4D Forum",
              to: "https://discuss.4d.com",
            },
            {
              label: "Facebook",
              to: "https://www.facebook.com/4Dsoftware/",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/4Dsoftware",
            },
            {
              label: "Youtube",
              to: "https://www.youtube.com/user/4Dsoftware",
            },
            {
              label: "Github",
              to: "https://github.com/4D/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "4D Documentation",
              to: "https://developer.4d.com/docs/",
            },
            {
              label: "4D Doc Center (Legacy)",
              to: "https://doc.4d.com/",
            },
            {
              label: "Knowledge Base",
              to: "http://kb.4d.com/",
            },
            {
              label: "Downloads",
              to: "https://us.4d.com/product-download",
            },
            {
              label: "Resources",
              to: "https://us.4d.com/resources",
            },
            {
              label: "Get Support",
              to: "https://us.4d.com/4d-technical-support",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About 4D",
              to: "https://us.4d.com/about-us",
            },
            {
              label: "Contact us",
              to: "https://us.4d.com/contact-us",
            },
            {
              label: "4D around the world",
              to: "https://us.4d.com/4d-around-the-world",
            },
            {
              label: "Careers",
              to: "https://us.4d.com/careers",
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
