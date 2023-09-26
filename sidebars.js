// @ts-check

const sidebars = {
  // But you can create a sidebar manually
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Core Concepts",
      items: [
        "core-concepts/WATT",
        "core-concepts/neural-tokens",
        "core-concepts/encoder",
        "core-concepts/activation-function",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/quickstart",
        {
          type: "category",
          label: "Creating Watts",
          items: ["getting-started/creating-watts/activation-function"],
        },
        {
          type: "category",
          label: "Using Watts",
          items: [
            "getting-started/using-watts/onchain",
            "getting-started/using-watts/ethersjs",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/gitcoin-guild"],
    },
  ],
};

module.exports = sidebars;
