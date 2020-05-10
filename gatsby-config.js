const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.',
  );
}

module.exports = {
  siteMetadata: {
    title: 'Gessler Vermessungsbüro',
    description: 'Ingenieurbüro für Vermessung Helmut Gessler',
    author: 'Helmut Gessler',
    url: 'https://www.gessler-vermessung.de',
    image: '/hero2.jpg',
  },
  pathPrefix: '/gessler-vermessungsbuero',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    '@contentful/gatsby-transformer-contentful-richtext',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'static'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gessler-vermessungsbuero',
        short_name: 'Gessler Vermessung',
        start_url: '/',
        background_color: '#1470AF',
        theme_color: '#1470AF',
        display: 'minimal-ui',
        icon: 'static/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
