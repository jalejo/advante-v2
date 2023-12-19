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

import TransitionPage from '../utils/TransitionPage';

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
        <ContactUs 
          underline = "var(--gradient-blue-violet-pink)"
          wrapperBox
          sendColor = "var(--gradient-blue-violet-pink)"
          checkColor = "var(--light-purple)"
          bgCircles = {[
            {
              color:"var(--green-mint)",
              size:"32.5rem",
              top:"-10%",
              right:"10%",
            },
            {
              color:"var(--vivid-purple)",
              size:"32.5rem",
              top:"-10%",
              left:"-10%",
              right:"auto",
            },
            {
              color:"var(--azure-blue)",
              size:"32.5rem",
              bottom:"-20%",
              right:"40%",
            }
          ]}
        />
    </>
  );
}

export default TransitionPage( Home );