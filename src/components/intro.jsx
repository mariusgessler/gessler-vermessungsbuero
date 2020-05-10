import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import dompurify from 'dompurify';
import Address from './address';

const Intro = () => {
  const data = useStaticQuery((graphql`
    query IntroQuery {
      allContentfulHero {
        edges {
          node {
            heading
          }
        }
      }
      allContentfulHeroIntroLongTextNode {
        edges {
          node {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    `));

  const { heading } = data.allContentfulHero.edges[0].node;
  const { html } = data.allContentfulHeroIntroLongTextNode.edges[0].node.childMarkdownRemark;
  const sanitizer = dompurify.sanitize;

  return (
    <div className="section section--intro">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <h1>{heading}</h1>
          <div className="text__wrapper" dangerouslySetInnerHTML={{ __html: sanitizer(html) }} />
        </div>
        <div className="col-xs-12 col-sm-6">
          <Address />
        </div>
      </div>
    </div>
  );
};

export default Intro;
