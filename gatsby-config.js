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
      path: `${__dirname}/static/img/`
    }
  },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"],
};
