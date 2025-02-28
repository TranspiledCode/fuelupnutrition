// src/pages/Home.js
import React from 'react';
import SEO from 'templates/SEO';
import PageWrapper from 'templates/PageWrapper';
import Header from 'organisms/Header';
import HeroSection from 'organisms/HeroSection';
import MenuSection from 'organisms/MenuSection';
import AboutSection from 'organisms/AboutSection';
import LocationSection from 'organisms/LocationSection';
import Footer from 'organisms/Footer';
import content from 'data/home';

const Home = () => {
  const { title, description, canonical, about } = content;

  return (
    <PageWrapper>
      <SEO title={title} description={description} canonical={canonical} />
      <Header />
      <HeroSection />
      <MenuSection />
      <AboutSection content={about} />
      <LocationSection />
      <Footer title={title} />
    </PageWrapper>
  );
};

export default Home;
