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
    {
      resolve: "gatsby-plugin-cookiebot",
      options: {
        cookiebotId: "a908ea04-7fd8-4f63-9f62-8af48669c6c7", // Required. Site's Cookiebot ID.
        manualMode: true, // Optional. Turns on Cookiebot's manual mode. Defaults to false.
        blockGtm: true, //  Optional. Skip blocking of GTM. Defaults to true if manualMode is set to true.
        includeInDevelopment: true, // Optional. Enables plugin in development. Will cause gatsby-plugin-google-tagmanager to thrown an error when pushing to dataLayer. Defaults to false.
        pluginDebug: true, // Optional. Debug mode for plugin development. Defaults to false.
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
