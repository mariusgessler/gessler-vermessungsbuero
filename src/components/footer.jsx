import React from 'react';
import { Link } from 'gatsby';
import Logo from './nanos/logo';
import Address from './address';

const Footer = () => (
  <div className="section section--footer">
    <div className="container">
      <div className="container-fluid">
        <div className="row between-sm middle-sm">
          <div className="col col-xs-12 col-sm-6">
            <Logo />
            <Address />
          </div>
          <div className="col col-xs-12 col-sm-6 end-sm link">
            <Link className="link--impressum" to="/impressum/">Datenschutz und Impressum</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
