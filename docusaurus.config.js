// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vectoshi Eigenvector Newkamoto",
  tagline: "Contribute to the Proof-of-Creativity Algorithm",
  favicon: "img/636cdeb29d8af379852bdd3c_fav1.png",

  url: "https://newfound8ion.github.io/",
  baseUrl: "/vblog/",

  organizationName: "newfound8ion",
  projectName: "vblog",

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
          // Removed homePageId and routeBasePath from here
        },
        blog: {
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
      title: "Vectoshi Eigenvector Newkamoto",
      logo: {
        alt: "Vector",
        src: "/img/headerLogo.gif", // Replace with the path to your gif logo
        href: "/", // Link back to homepage
        target: "_self", // Open in the same tab
      },
      items: [
        // Add other navbar items as needed
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Vector Newman.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
