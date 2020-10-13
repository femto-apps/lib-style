module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    {
        name: 'storypug',
        options: {
            babel: true, //use babel-loader
            loaderOptions: {
                root: 'src/components', // use src components as the pug root inclusion path
            },
        },
      },
  ]
}