import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Leistungen = () => {
  const { allContentfulUnsereLeistungen } = useStaticQuery((graphql`
    query LeistungenQuery {
      allContentfulUnsereLeistungen {
        edges {
          node {
            leistungTitle1
            leistungTitle2
            leistungTitle3
            title
            leistungen1
            leistungen2
            leistungen3
          }
        }
      }
    }`));

  const { node } = allContentfulUnsereLeistungen.edges[0];

  return (
    <div className="section section--leistungen">
      <h1>{node.title}</h1>
      <div className="leistungen__single">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2>{node.leistungTitle1}</h2>
          </div>
          <div className="col-xs-12 col-sm-6">
            <p>{node.leistungen1.join(', ')}</p>
          </div>
        </div>
      </div>
      <div className="leistungen__single">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2>{node.leistungTitle2}</h2>
          </div>
          <div className="col-xs-12 col-sm-6">
            <p>{node.leistungen2.join(', ')}</p>
          </div>
        </div>
      </div>
      <div className="leistungen__single">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2>{node.leistungTitle3}</h2>
          </div>
          <div className="col-xs-12 col-sm-6">
            <p>{node.leistungen3.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leistungen;
