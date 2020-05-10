import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Address = () => {
  const data = useStaticQuery((graphql`
    query AdressQuery {
      allContentfulAdresse {
        edges {
          node {
            name
            name2
            street
            zipCity
          }
        }
      }
  }`));

  const address = data.allContentfulAdresse.edges[0].node;

  return (
    <ul className="address">
      {Object.values(address).map((item) => (
        <li className="address__item" key={item}>
          {item}
        </li>
      ))}
      <li className="address__item">
        <a href="mailto: helmut.gessler@t-online.de">helmut.gessler@t-online.de</a>
      </li>
      <li className="address__item">
        <a href="tel: +497664402710">07664 - 40 27 10</a>
      </li>
    </ul>
  );
};

export default Address;
