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
      <div className="hero__image">
        <img src={url} alt="Hero" />
      </div>
      <div className="hero__title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Hero;
