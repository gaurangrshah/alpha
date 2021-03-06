const path = require('path');
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `env.${activeEnv}`
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-cara`,
      options: {
        siteMetadata: {
          siteTitle: `G. Shah Dev`,
          siteTitleAlt: `Gaurang R. Shah Tech Consultant`,
          siteHeadline: `G.Shah Dev`,
          siteUrl: `https://www.gshah.dev`,
          siteDescription: `Tech Savy, Digital Enthusiast helping you succeed.`,
          siteLanguage: `en`,
          siteImage: `/banner.jpg`,
          author: `@gshahdev`,
          basePath: `./src/sections`
        },
        // source: 'parts'
      }
    },
    `gatsby-theme-boostrap-sass`,
  ],
  "pathPrefix": "/alpha"
}
