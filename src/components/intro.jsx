import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Address from './address';
import Logo from './nanos/logo';

const Intro = () => {
  const data = useStaticQuery((graphql`
    query IntroQuery {
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


  const { html } = data.allContentfulHeroIntroLongTextNode.edges[0].node.childMarkdownRemark;


  return (
    <div className="section section--intro">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="intro__container">
            <div className="text__wrapper" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        <div className="col-xs-12 col-sm-3">
          <div className="address__container">
            <Logo />
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
