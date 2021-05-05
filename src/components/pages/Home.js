import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Events from '../Events';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import Text from '../Text';

function Home () {
  return (
    <>
      <HeroSection />
      <Cards />
      <Text />
      <Events />
      <Footer />
    </>
  )
}

export default Home;