import React from 'react';

import ClientAflac from './../images/logo-clients/aflac.png'
import ClientBajibot from './../images/logo-clients/bajibot.png'
import ClientBernzomatic from './../images/logo-clients/bernzomatic.png'
import ClientBodyarmor from './../images/logo-clients/bodyarmor.png'
import ClientBridgewater from './../images/logo-clients/bridgewater.png'
import ClientBuffalotrace from './../images/logo-clients/buffalotrace.png'
import ClientCoronet from './../images/logo-clients/coronet.png'
import ClientCrackerbarrel from './../images/logo-clients/crackerbarrel.png'
import ClientDavidortiz from './../images/logo-clients/davidortiz.png'
import ClientFotl from './../images/logo-clients/fotl.png'
import ClientHulu from './../images/logo-clients/hulu.png'
import ClientManeaddicts from './../images/logo-clients/maneaddicts.png'
import ClientMyspalivec from './../images/logo-clients/myspalive.png'
import ClientNbc from './../images/logo-clients/nbc.png'
import ClientNutiva from './../images/logo-clients/nutiva.png'
import ClientPeachy from './../images/logo-clients/peachy.png'
import ClientPlanut from './../images/logo-clients/planut.png'
import ClientRobertmarc from './../images/logo-clients/robertmarc.png'
import ClientRowdy from './../images/logo-clients/rowdy.png'
import ClientSarais from './../images/logo-clients/sarais.png'
import ClientSeagrams from './../images/logo-clients/seagrams.png'
import ClientSixplusone from './../images/logo-clients/sixplusone.png'
import ClientStaffwizard from './../images/logo-clients/staffwizard.png'
import ClientSyfy from './../images/logo-clients/syfy.png'
import ClientSynchrony from './../images/logo-clients/synchrony.png'
import ClientTwsj from './../images/logo-clients/twsj.png'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const OurClients = () => {
  return (
    <section className='ourClientsWrapper'>
      <div className='containerFull'>
        <h3>Our Clients</h3>
        <div className='title-underline blue-green-orange'></div>
      </div> 

      <Swiper
        slidesPerView={'auto'}
        centeredSlides={false}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay]}
        className="clientsSwiper"
      >

        <SwiperSlide><img src={ClientAflac} /></SwiperSlide>
        <SwiperSlide><img src={ClientBajibot} /></SwiperSlide>
        <SwiperSlide><img src={ClientBernzomatic} /></SwiperSlide>
        <SwiperSlide><img src={ClientBodyarmor} /></SwiperSlide>
        <SwiperSlide><img src={ClientBridgewater} /></SwiperSlide>
        <SwiperSlide><img src={ClientBuffalotrace} /></SwiperSlide>
        <SwiperSlide><img src={ClientCoronet} /></SwiperSlide>
        <SwiperSlide><img src={ClientCrackerbarrel} /></SwiperSlide>
        <SwiperSlide><img src={ClientDavidortiz} /></SwiperSlide>
        <SwiperSlide><img src={ClientFotl} /></SwiperSlide>

        <SwiperSlide><img src={ClientHulu} /></SwiperSlide>
        <SwiperSlide><img src={ClientManeaddicts} /></SwiperSlide>
        <SwiperSlide><img src={ClientMyspalivec} /></SwiperSlide>
        <SwiperSlide><img src={ClientNbc} /></SwiperSlide>
        <SwiperSlide><img src={ClientNutiva} /></SwiperSlide>
        <SwiperSlide><img src={ClientPeachy} /></SwiperSlide>
        <SwiperSlide><img src={ClientPlanut} /></SwiperSlide>
        <SwiperSlide><img src={ClientRobertmarc} /></SwiperSlide>
        <SwiperSlide><img src={ClientRowdy} /></SwiperSlide>
        <SwiperSlide><img src={ClientSarais} /></SwiperSlide>

        <SwiperSlide><img src={ClientSeagrams} /></SwiperSlide>
        <SwiperSlide><img src={ClientSixplusone} /></SwiperSlide>
        <SwiperSlide><img src={ClientStaffwizard} /></SwiperSlide>
        <SwiperSlide><img src={ClientSyfy} /></SwiperSlide>
        <SwiperSlide><img src={ClientSynchrony} /></SwiperSlide>
        <SwiperSlide><img src={ClientTwsj} /></SwiperSlide>

      </Swiper>
    </section>
  );
}

export default OurClients;