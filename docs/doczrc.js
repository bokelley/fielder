export default {
  name: 'Fielder',
  description: 'Documentation for Fielder',
  files: ['src/**/*.mdx'],
  menu: ['About', 'Guides', 'Api', 'Examples'],
  repository: 'https://github.com/andyrichardson/fielder',
  themeConfig: {
    initialColorMode: 'dark'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['*']
      }
    }
  ]
};
