const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1
        },
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  "framework": "@storybook/react",
  "core": {
    builder: '@storybook/builder-webpack5',
  },
  previewHead: (head) => (`
     ${head}
    <style>
      #main {
        background-color: yellow;
      }
    </style>
  `)
}