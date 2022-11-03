module.exports = {
  siteMetadata: {
    title: "Penn Climate Ventures",
    description: "Penn Climate Ventures. Catalyzing climate action.",
    author: "PCV",
    keywords: [
      "climate",
      "environment",
      "startup",
      "venture",
      "tech",
      "Penn"
    ],
    image: "/web_preview.png"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1000,
              withWebp: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Penn Climate Ventures",
        short_name: "PCV",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#3083BC",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/pcv/favicon.png" // This path is relative to the root of the site.
      }
    }
  ],
};
