import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef, useState } from 'react';

import ServicesList from "../../jsons/market-analysis-services.json"
import MarketArrow from '../../images/MarketArrow';

const Services = () => {

    const [swiper, setSwiper] = useState(null)

    const nextTo = () => {
        swiper.slideNext();
    };
    const prevTo = () => {
        swiper.slidePrev();
    };
  
  return (
    <section className="market-we-study">
  
        <div className="containerFull">
       
        <h3>We study</h3>
        
        <div className='market-listNavigator'>
            <div className='market-list-arrow market-list-backward' onClick={ prevTo } ><MarketArrow /></div>
            <div className='market-list-arrow market-list-forward' onClick={ nextTo } ><MarketArrow /></div>
        </div>
        

        <div className="market-services-list">
                <Swiper

                slidesPerView={ 'auto' }
                centeredSlides={false}
                spaceBetween= {20}

                onSwiper={(s) => {
                    console.log("initialize swiper", s);
                    setSwiper(s);
                }}

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
              
            </div>
        </div>
    </section>
  );
};

export default Services;