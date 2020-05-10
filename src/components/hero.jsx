import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = () => {
  const { allContentfulHero } = useStaticQuery((graphql`
    query HeroQuery {
      allContentfulHero {
        edges {
          node {
            heroImage {
              file {
                url
                fileName
                contentType
              }
            }
            heroTitle
          }
        }
      }
    }`));

  const { url } = allContentfulHero.edges[0].node.heroImage.file;
  const title = allContentfulHero.edges[0].node.heroTitle;

  return (
    <div className="section section--hero">
      <div className="row between-md">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="hero__title">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="col col-xs-12 col-sm-6">
          <div className="hero__image">
            <img src={url} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
