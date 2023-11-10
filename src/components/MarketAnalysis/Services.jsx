import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { useRef } from 'react';

import ServicesList from "../../jsons/market-analysis-services.json"
import MarketArrow from './MarketArrow';

const Services = () => {

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <section className="market-we-study">
  
        <div className="containerFull">
       
        <h3>We study</h3>
        
        <div className='market-listNavigator'>
            <div className='market-list-arrow market-list-backward'><MarketArrow /></div>
            <div className='market-list-arrow market-list-forward'><MarketArrow /></div>
        </div>
        

        <div className="market-services-list">
                <Swiper

                modules={[Navigation]}
                navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                swiper.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.prevEl = navigationPrevRef.current;
                }}

                slidesPerView={ 'auto' }
                centeredSlides={false}
                spaceBetween= {20}

                breakpoints={{
                    900: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    },
                    1200: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    }
                }}
                >
                    {
                        ServicesList.map( ( serv ) => (
                            <SwiperSlide key={ serv.id }>
                                <div className='market-service-box' style={ {backgroundColor: serv.ico_color+"66" } }>
                                    
                                </div>
                                <h5 dangerouslySetInnerHTML={{ __html: serv.title }} />
                                <p>{ serv.content }</p>
                            </SwiperSlide>
                        ) )
                    }
                </Swiper>
                { /*
                <div>
                    <button ref={navigationNextRef}>Next</button>
                    <button ref={navigationPrevRef}>Prev</button>
                </div>
                */}

            </div>
        </div>
    </section>
  );
};

export default Services;