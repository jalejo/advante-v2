import { useState } from "react";

import ServicesList from "../../jsons/design-services.json"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import DesignServiceContent from "./DesignServiceContent";

const designServiceImages = require.context('../../images/', true );

const Services = () => {

    const [activeService, setActiveService] = useState(1);

    const handleServiceClick = (itemNumber) => {
        setActiveService(itemNumber);
    };

    const activeServiceObject = ServicesList.find((serv) => serv.id === activeService);

    return (
        <section className="designServicesWrapper">
            <div className="bgr-dots"></div>
            <div className="containerFull">
                <h3>Services.</h3>

                <div className="design-services-list">
                    <Swiper
                    slidesPerView={ 'auto' }
                    centeredSlides={false}
                    spaceBetween= {20}

                    breakpoints={{
                        900: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        },
                        1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        }
                    }}


                    >
                    {
                        ServicesList.map((serv) => (
                            <SwiperSlide key={ serv.id }>
                                <div  
                                    className={`design-services-item ${activeService === serv.id ? 'active' : ''} `} 
                                    onClick={() => handleServiceClick( serv.id )}
                                > 
                                    <div className="design-services-image-wrapper">
                                        <div className="design-services-image">
                                            <img 
                                                src={designServiceImages(`./${serv.ico}`)}
                                                alt={ serv.title }
                                            />
                                        </div>
                                    </div>
                                    <span>{ serv.title } </span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                </div>
                
                <DesignServiceContent 
                    selectedService = { activeServiceObject }
                />
                
            </div>
        </section>
    );
};
    
export default Services;