module.exports = ({ basePath = `/`, mdx = true, siteMetadata, source = `sections` }) => ({
  siteMetadata: {
    siteTitle: `Cara`,
    siteTitleAlt: `Cara - @lekoarts/gatsby-theme-cara`,
    siteHeadline: `Cara - Gatsby Theme from @lekoarts`,
    siteUrl: `https://cara.lekoarts.de`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteLanguage: `en`,
    // siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
    basePath,
    ...siteMetadata
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `../site/src/${source}`,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
})
