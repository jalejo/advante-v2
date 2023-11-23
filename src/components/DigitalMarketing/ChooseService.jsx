import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef, useState } from 'react';

import CasesList from '../../jsons/cases.json';
import SolutionsList from '../../jsons/solutions.json'
import IndustryList from '../../jsons/industry.json'
import DigitalServicesList from '../../jsons/digital-marketing-services.json'

import MarketArrow from '../../images/MarketArrow';


import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';


const industryIcons = require.context('../../images/icons', true );
const industryWithEcommerce = IndustryList.filter(item => item.hasOwnProperty("image-ecommerce"));

const ChooseService = () => {

    const [swiper, setSwiper] = useState(null)

    const nextTo = () => {
        swiper.slideNext();
    };
    const prevTo = () => {
        swiper.slidePrev();
    };
  
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [selectedCase, setSelectedCase] = useState(CasesList[7])
    const [selectedTab, setSelectedTab] = useState(1);

    const filteredData = SolutionsList.filter(item => item.industry.includes(selectedTab) && item.services.includes(2));


    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
        swiper.slideTo( newValue - 1 );
    };


  return (
    <>
        <section className="digital-marketing-expertise">
    
            <div className="containerFull">

                <div className='digital-marketing-services-wrapper'>
                    <div className='digital-marketing-services-select'>
                        <h3>We Do:</h3>
                        <Tabs
                            value={selectedTab}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            orientation={ isMediumScreen ? 'horizontal' : 'vertical' }

                            sx={{
                                
                                overflow: "visible",

                                "& .MuiButtonBase-root":{
                                    color: "var(--navy-blue)",
                                    fontSize: isMediumScreen ? '1rem' : '1.25rem',
                                    textTransform: "inherit",
                                    fontWeight: "400",
                                    padding: '0 0 0 0rem',
                                    transition: "all ease-in 150ms",
                                    alignItems: "center",
                                    textAlign: "left",
                                    columnGap: isMediumScreen ? '.5rem' : '1rem',
                                    minWidth: "auto"
                                },
                                "& .MuiTabs-scroller":{
                                    overflowX:  isMediumScreen ? 'auto' : 'visible' ,
                                    overflowY:  isMediumScreen ? 'hidden' : 'visible' ,
                                },
                                "& .MuiTabs-flexContainer":{
                                    alignItems: "flex-start"
                                },
                                "& .MuiTabs-indicator":{
                                    display: 'none' ,
                                },
                                " .MuiTabs-flexContainer button":{
                                    marginRight: isMediumScreen ? '1.55rem' : '0rem',
                                },
                                " .MuiButtonBase-root.Mui-selected":{
                                    fontWeight: "600",
                                    color: "var(--navy-blue)",
                                },
                                " .MuiButtonBase-root .MuiTouchRipple-root":{
                                display: "none"
                                },
                                " .MuiTabScrollButton-horizontal":{
                                    padding: "0 !important",
                                    backgroundColor: "rgb(240 248 255 / 0%)"
                                }
                            }}
                        
                        >
                        {
                            DigitalServicesList.map( (digiService) => (
                                <Tab
                                    key={digiService.id}
                                    label={digiService.title}
                                    value={digiService.id}
                                />
                            ) )
                        }
                        </Tabs>
                    </div>
                    <div className='digital-marketing-services-swiper'>
                        <div className="digital-marketing-services-list">
                            <Swiper

                            slidesPerView={ 1 }
                            centeredSlides={true}
                            spaceBetween= {20}
                            
                            onSwiper={(s) => {
                                console.log("initialize swiper", s);
                                setSwiper(s);
                            }}

                            breakpoints={{
                                600: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                },
                                800: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                1350: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                }
                            }}
                            >
                                {
                                    DigitalServicesList.map( ( digiService ) => (
                                        <SwiperSlide key={ digiService.id } onClick={( event ) => handleChange( event, digiService.id )} >
                                            <div className='digital-service-box-colors'>
                                                <svg viewBox="0 0 453.5 453.5">
                                                    <path/>
                                                </svg>
                                                <svg viewBox="0 0 453.5 453.5">
                                                    <path />
                                                </svg>
                                                <svg viewBox="0 0 453.5 453.5">
                                                    <path />
                                                </svg>
                                                <svg viewBox="0 0 453.5 453.5">
                                                    <path />
                                                </svg>
                                                <svg viewBox="0 0 453.5 453.5">
                                                    <path />
                                                </svg>
                                            </div>
                                            <div className="bgr-noise"></div>
                                            <div className='digital-service-box'>
                                                <div className='digital-service-headline'>
                                                    <h5>{digiService.title}</h5>
                                                    <a href='' className='digital-service-arrow'>
                                                    <MarketArrow />
                                                    </a>
                                                </div>
                                                
                                                <div className='digital-marketing-services-text' dangerouslySetInnerHTML={{ __html: digiService.content }} />
                                            </div>
                                        </SwiperSlide>
                                    ) )
                                }
                            </Swiper>
                        
                        </div>
                    </div>
                </div>
            </div>
            
            

        </section>

    </>
  );
};

export default ChooseService;