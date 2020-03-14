module.exports = {
  stories: ["../src/**/*.stories.(tsx|mdx)"],
  addons: [
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    {
      name: "@storybook/addon-docs/react/preset",
      options: {
        configureJSX: true
      }
    }
  ]
};
