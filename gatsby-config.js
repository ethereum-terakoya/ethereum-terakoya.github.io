require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://ethereum-terakoya.org`,
    title: `Ethereum Terakoya`,
    description: ``,
    author: `couger`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `ja`,
        locales: process.env.LOCALES,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./i18n/react-intl/ja.json`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // process all `.md` files as MDX
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
