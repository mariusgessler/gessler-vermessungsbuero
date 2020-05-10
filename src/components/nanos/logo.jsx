import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Logo = () => {
  const { allContentfulHero } = useStaticQuery((graphql`
    query LogoQuery {
      allContentfulHero {
        edges {
          node {
            logo {
              file {
                url
              }
            }
          }
        }
      }
    }`));
  const { url } = allContentfulHero.edges[0].node.logo.file;

  return (
    <div className="logo__wrapper">
      <img src={url} alt="Logo Gessler Vermessung" />
    </div>
  );
};

export default Logo;
