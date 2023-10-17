import React from 'react';
import Hero from '../components/Hero'
import ServicesRoot from '../components/ServicesRoot';
import OurClients from '../components/OurClients';
import Testimonials from '../components/Testimonials';
import ArticlesEventsCases from '../components/ArticlesEventsCases';
import MainCase from '../components/MainCase';
import Newsletter from '../components/Newsletter';
import SuccessfulCollaborations from '../components/SuccessfulCollaborations';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <>
        <Hero />
        <ServicesRoot />
        <OurClients />
        <Testimonials />
        <ArticlesEventsCases />
        <Newsletter />
        <SuccessfulCollaborations />
        <ContactUs />
    </>
  );
}

export default Home;