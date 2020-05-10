import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Address = () => {
  const data = useStaticQuery((graphql`
    query AdressQuery {
      allContentfulAdresse {
        edges {
          node {
            email
            phone
            street
            zipCity
            name2
            name
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
    </ul>
  );
};

export default Address;
