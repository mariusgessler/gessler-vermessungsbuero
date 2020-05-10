import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Checkmark from '../../static/checkmark.svg';

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
      <h2>{node.title}</h2>
      <hr />
      <div className="row between-sm">
        <div className="col-xs-12 col-sm-4">
          <div className="leistungen__single">
            <h3>{node.leistungTitle1}</h3>
            <ul className="leistungen__list">
              {node.leistungen1.map((item) => (
                <li className="leistungen__item">
                  <Checkmark />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="leistungen__single">
            <h3>{node.leistungTitle2}</h3>
            <ul className="leistungen__list">
              {node.leistungen2.map((item) => (
                <li className="leistungen__item">
                  <Checkmark />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="leistungen__single">
            <h3>{node.leistungTitle3}</h3>
            <ul className="leistungen__list">
              {node.leistungen3.map((item) => (
                <li className="leistungen__item">
                  <Checkmark />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leistungen;
