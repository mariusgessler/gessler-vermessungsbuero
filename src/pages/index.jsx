import React from 'react';
import Topbar from '../components/topbar';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Leistungen from '../components/leistungen';
import Footer from '../components/footer';
import SEO from '../components/nanos/SEO';
import '../css/style.scss';

const Index = () => (
  <>
    <SEO />
    <Topbar />
    <div className="container">
      <div className="container-fluid">
        <Hero />
        <Intro />
        <Leistungen />
      </div>
    </div>
    <Footer />
  </>
);

export default Index;
