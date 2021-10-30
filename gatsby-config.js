module.exports = {
  siteMetadata: {
    siteUrl: "https://www.lichtbild-enthusiastin.de",
    title: "lichtbild-enthusiastin",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-NNWTHLWFCN"],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: true,
          respectDNT: false,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 100,
        },
      },
    },
  ],
};
