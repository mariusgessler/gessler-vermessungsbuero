import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import dompurify from 'dompurify';

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
  const sanitizer = dompurify.sanitize;

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="section section--impressum">
          <div dangerouslySetInnerHTML={{ __html: sanitizer(html) }} />
        </div>
      </div>
    </div>

  );
};

export default Impressum;
