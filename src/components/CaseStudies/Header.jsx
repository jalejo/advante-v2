import { Swiper, SwiperSlide } from 'swiper/react';

import PlanutPCs from '../../images/cases/ComputerPlanutGoods.png'
import SpaPCs from '../../images/cases/ComputerSPA.png'
import SixPlusPCs from '../../images/cases/ComputerSixPlusOne.png'

import IcoArrowThin from "../../images/svg/IcoArrowThin";

import { Autoplay, Pagination } from 'swiper/modules';

const Header = () => {
  return (
    <section className="case-studies-header">

        <div class="bgCircle bgCircle-01"></div>
        <div class="bgCircle bgCircle-02"></div>
        <div class="bgCircle bgCircle-03"></div>
        <div class="bgCircle bgCircle-04"></div>

        <div className="bgr-noise"></div>
        <div className="containerFull">
            <div className="case-studies-header-headline">
                <h1>CASE <br /><span>STUDIES.</span></h1>
                <p>Our team has provided many software solutions to multiple companies focused on industries such as, healthcare, e-commerce, HHRR, Law, Finance, marketplaces, staffing, marketing, legal issues, among others, we also focus on designing our own digital projects.</p>
                <a className='thinButton'>
                    <span>Tell us about your project</span>
                    <IcoArrowThin color='var(--white-color)' />
                </a>
            </div>
            <div className="case-studies-header-swiper">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    className='case-studio-swiper'
                >
                    <SwiperSlide>
                        <div className='case-thumbnail'>
                            <h6>Marketplace</h6>
                            <img 
                                src={ PlanutPCs }
                                alt='Planut Goods'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='case-thumbnail'>
                            <h6>Healthcare</h6>
                            <img 
                                src={ SpaPCs }
                                alt='Spa Live'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='case-thumbnail'>
                            <h6>Artificial Intelligence</h6>
                            <img 
                                src={ SixPlusPCs }
                                alt='Six Plus One'
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
   
        </div>
    </section>
  );
};

export default Header;
