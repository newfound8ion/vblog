// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Newcoin Developer",
  tagline: "Contribute to the Proof-of-Creativity Algorithm",
  favicon: "img/636cdeb29d8af379852bdd3c_fav1.png",

  // Set the production url of your site here
  url: "https://developer.newcoin.org",
  baseUrl: "/vblog/",

  organizationName: "newfound8ion",
  projectName: "developer",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/newfound8ion/developer/edit/master/",
        },
        blog: {
          path: "/",
          showReadingTime: true,
          editUrl: "https://github.com/newfound8ion/developer/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  
  themeConfig: {
    image: "/img/641c37a4fce0f1c717da3692_nco-symbol-black.svg",
    navbar: {
      title: "Newcoin Developer",
      logo: {
        alt: "Newcoin",
        src: "/img/641c37a4fce0f1c717da3692_nco-symbol-black.svg",
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Newcoin is an open-source project powered by Newfoundation.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
