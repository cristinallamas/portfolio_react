module.exports = {
  siteMetadata: {
    title: `Cristina Llamas | FullStack Developer`,
    siteUrl: `https://www.cristinallamas.dev`,
    description: `FullStack Developer Portfolio of Cristina Llamas`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};
