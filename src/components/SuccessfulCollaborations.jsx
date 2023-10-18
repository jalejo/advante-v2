import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';


import { EffectFade, Autoplay } from 'swiper/modules';

import collaborationGroup1 from '../images/collaborations-group-1.png'
import collaborationGroup2 from '../images/collaborations-group-2.png'


const SuccessfulCollaborations = () => {
  return (
    <section className='collaborationsWrapper'>
      <div className='containerFull'>
        <h3>Successful <span className='text-orange-pink'>Collaborations</span></h3>
        <div className='collaboration-logos'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              speed={1000}
              effect={'fade'}
              loop={true}
              navigation={true}
              modules={[Autoplay, EffectFade]}
              className="mySwiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
          >
            <SwiperSlide>
              <img src={ collaborationGroup1 } />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ collaborationGroup2 } />
            </SwiperSlide>
          </Swiper>
          
        </div>
        <div className='collaboration-footer'>
          <p>Do you want to give tech power to your company and partner with us by expanding services provided to your clients? </p>
          <a className='baseButton orangePinkGradientBttn'>Partner with us</a>
        </div>
        
      </div>

    </section>

  );
}

export default SuccessfulCollaborations;