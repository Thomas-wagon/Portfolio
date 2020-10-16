module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Welcome to my portfolio`,
    author: `thomas viaules`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Thomas Viaules Portfolio",
        short_name: "thomas viaules",
        description: `web development portfolio · Thomas is a web developer based in montreal`,
        start_url: `/`,
        background_color: `#F7F3EB`,
        theme_color: `#F7F3EB`,
        display: `standalone`,
        icon: `src/images/my_logo.png`, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
