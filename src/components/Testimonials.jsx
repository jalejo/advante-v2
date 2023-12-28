import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialList from '../jsons/testimonials.json' 
import StarRanking from './../images/svg/star-testimonial.svg'

import 'swiper/css';

const Testimonials = () => {
  return (
    <section className='testimonialWrapper '>
      <div className='containerFull'>
        <h3>The <span className='text-blue-violet-red'>trust and loyalty of our clients</span><br /> are fundamental to us.</h3>

        <div className='testimonial-bubbles-wrapper'>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={false}
            className="mySwiper"
            breakpoints={{
              900: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 58,
              }
            }}
          >
            {
              TestimonialList.map((testimonial) => (
                
                  <SwiperSlide key={testimonial.id} >
                    <div className='testimonial-item' >
                      <div className='testimonial-bubble'>
                        <div className='testimonial-bubble-text'>
                          { testimonial.headline && <h6>"{testimonial.headline}"</h6> }
                          { testimonial.message && <p>{testimonial.message}</p> }
                        </div>
                        <div className='ranking-star-wrapper'>
                          <img className='ranking-star' src={ StarRanking } />
                          <img className='ranking-star' src={ StarRanking } />
                          <img className='ranking-star' src={ StarRanking } />
                          <img className='ranking-star' src={ StarRanking } />
                          <img className='ranking-star' src={ StarRanking } />
                        </div>
                      </div>

                      <h5>{ testimonial.name && testimonial.name }</h5>
                      <p>{ testimonial.company && testimonial.company }</p>
                    </div>
                  </SwiperSlide>
              ))
            }
          </Swiper>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;