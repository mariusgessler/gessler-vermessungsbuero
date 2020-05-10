import React from 'react';
import { Link } from 'gatsby';
import Address from './address';

const Footer = () => (
  <div className="section section--footer">
    <div className="row">
      <div className="col col-xs-12 col-sm-6">
        <Address />
      </div>
      <div className="col col-xs-12 col-md-6">
        <Link to="/impressum/">Datenschutz und Impressum</Link>
      </div>
    </div>
  </div>
);

export default Footer;
