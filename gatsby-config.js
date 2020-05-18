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
    title: 'Vermessungsbüro Gessler',
    description: 'Wir messen für Sie mit klassischen Vermessungsmethoden – von der terrestrischen Vermessung bis hin zur GPS gesteuerten Vermessung. Dadurch stellen wir sicher, dass Sie für jedes Vorhaben genau die Grundlagen erhalten, die Sie benötigen. Durch die gezielte Erfassung ihrer Vermessungsaufgaben können wir Ihnen ein zeit- und kosteneffizientes Arbeiten anbieten. Verschiedene Kommunen, das Land Baden-Württemberg, Ingenieur- und Stadtplanungsbüros und Architekten vertrauen auf unsere Arbeit seit dem Jahr 2004.',
    author: 'Helmut Gessler Dipl. Ing. (Fh)',
    url: 'https://www.gessler-vermessung.de',
    image: '/hero2.jpg',
    keywords: ['gessler vermessung', 'vermessungsbüro freiburg', 'ingenieurbüro für vermessung helmut gessler', 'helmut gessler', 'vermessung freiburg', 'vermessungsbuero gessler', 'katastervermessung', 'gebäudevermessung', 'ingenieursvermessung'],
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
