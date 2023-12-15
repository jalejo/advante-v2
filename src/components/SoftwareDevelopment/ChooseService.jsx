import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import DevelopmentServicesList from '../../jsons/development-services.json'
import MarketArrow from '../../images/MarketArrow';

import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';


const ChooseService = () => {

    const [swiper, setSwiper] = useState(null)


    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));


    const [selectedTab, setSelectedTab] = useState(1);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
        swiper.slideTo( newValue - 1 );
    };


  return (
    <>
        <section className="development-expertise">
    
            <div className="containerFull">

                <div className='development-services-wrapper'>
                    <div className='development-services-select'>
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
                                    fontSize: isMediumScreen ? '0.9rem' : '1.15rem',
                                    textTransform: "inherit",
                                    fontWeight: "400",
                                    padding: '0 0 0 0rem',
                                    transition: "all ease-in 150ms",
                                    alignItems: "center",
                                    textAlign: "left",
                                    columnGap: isMediumScreen ? '.5rem' : '1rem',
                                    minWidth: "auto",
                                    maxWidth: "600px"
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
                            DevelopmentServicesList.map( (digiService) => (
                                <Tab
                                    key={digiService.id}
                                    label={digiService.title}
                                    value={digiService.id}
                                />
                            ) )
                        }
                        </Tabs>
                    </div>
                    <div className='development-services-swiper'>
                        <div className="development-services-list">
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
                                1125: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                1550: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                }
                            }}
                            >
                                {
                                    DevelopmentServicesList.map( ( digiService ) => (
                                        <SwiperSlide key={ digiService.id } onClick={( event ) => handleChange( event, digiService.id )} >
                                            <div className='development-service-box-colors'>
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
                                            <div className='development-service-box'>
                                                <div className='development-service-headline'>
                                                    <h5>{digiService.title}</h5>
                                                    {/*
                                                        <a href='' className='development-service-arrow'>
                                                        <MarketArrow />
                                                        </a>
                                                    */}
                                                </div>
                                                
                                                <div className='development-services-text' dangerouslySetInnerHTML={{ __html: digiService.content }} />
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