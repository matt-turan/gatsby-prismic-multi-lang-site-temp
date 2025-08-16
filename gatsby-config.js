// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
const dotenv = require('dotenv')
const path = require(`path`)

dotenv.config()

const prismicConfig = require('./prismic-configuration')

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Prismic Tutorial',
    description: 'Learn how to integrate Prismic into your Gatsby project.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        // repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        repositoryName: prismicConfig.prismicRepo,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: require('./src/utils/LinkResolver').linkResolver,
        schemas: {
          homepage: require('./custom_types/homepage.json'),
          navigation: require('./custom_types/navigation.json'),
          page: require('./custom_types/page.json'),
          brands: require('./custom_types/brands.json'),
          our_brand_module: require("./custom_types/our_brand_module.json"),
          our_brands_module: require("./custom_types/our_brands_module.json"),
          top_menu: require("./custom_types/top_menu.json"),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: prismicConfig.prismicRepo,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src', 'images', 'favicon.png'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Lato\:400,400,700,700i,900`, `Amiri\:400,400,700,700i`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'images'),
      },
    },
  ],
}
