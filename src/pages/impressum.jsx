import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Impressum = () => {
  const { allContentfulImpressumImpressumRichTextNode } = useStaticQuery((graphql`
  query ImpressumQuery {
    allContentfulImpressumImpressumRichTextNode {
      nodes {
        childContentfulRichText {
          html
        }
      }
    }
  }`));

  const { html } = allContentfulImpressumImpressumRichTextNode.nodes[0].childContentfulRichText;

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="section section--impressum" style={{ paddingBottom: '75px' }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>

  );
};

export default Impressum;
