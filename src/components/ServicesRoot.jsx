import React from 'react';

import AdvanteIcons from './AdvanteIcons';
import IcoArrowThin from '../images/svg/IcoArrowThin';
import ServicesList from '../jsons/services.json'
import CapabilitiesList from '../jsons/capabilities.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const ServicesRoot = () => {

  return (
    <section className='servicesRootWrapper ServicesRoot'>
      
      <div className='containerFull'>

          <h3>A complete technical partner to launch and grow your business.</h3>
      </div>

      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.services-cards-dots',
        }}
        modules={[Pagination]}  
        className="services-swiper"
      >
        {ServicesList.map((service) => (
          <SwiperSlide key={service.id}>
            <div className='service-card-wrapper'>
              <div className='service-card-overview'>
                <div className='service-icon'> 
                <AdvanteIcons
                  type={service.iconComponent}
                />
                </div>
                <h5>{service.name}</h5>
                <p>{ service.description}</p> 
              </div>
              <div className='service-card-capabilities'>
                <h5>Our Capabilities</h5>
                <div className='capabilities-grid'>
                  { service.capabilities.map((capabilityId) => {
                    const capability = CapabilitiesList.find((c) => c.id === capabilityId );
                    return (
                      <div className='capabilities-grid-item' key={ capability.id }> { capability.name} </div>
                    );
                  } ) }
                </div>
                <a className='see-more-btn absolute-right-bottom'>
                  <span>See more</span> 
                  <IcoArrowThin color='var(--tangerine-orange)' />
                </a>
              </div>
            </div>
          </SwiperSlide> 
        ))}
      </Swiper>
          <div className='services-cards-dots'> </div>
    </section>

  );
}


export default ServicesRoot;