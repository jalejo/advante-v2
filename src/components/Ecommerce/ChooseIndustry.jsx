import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef, useState } from 'react';
import MainCase from "../MainCase";

import CasesList from '../../jsons/cases.json';
import SolutionsList from '../../jsons/solutions.json'
import IndustryList from '../../jsons/industry.json'
import CapabilitiesList from '../../jsons/capabilities.json'

import MarketArrow from '../../images/MarketArrow';


import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';


const industryIcons = require.context('../../images/icons', true );
const industryWithEcommerce = IndustryList.filter(item => item.hasOwnProperty("image-ecommerce"));

const ChooseIndustry = () => {

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
    };

  return (
    <>
        <section className="e-commerce-expertise">
    
            <div className="containerFull">
        
                <h3>Our broad <span>industry</span> <br />expertise.</h3>
            
                <div className='e-commerce-listNavigator'>
                    <div className='e-commerce-list-arrow e-commerce-list-backward' onClick={ prevTo } ><MarketArrow /></div>
                    <div className='e-commerce-list-arrow e-commerce-list-forward' onClick={ nextTo } ><MarketArrow /></div>
                </div>
            
                <div className='e-commerce-solutions-wrapper'>
                    <div className='e-commerce-solutions-select'>
                        <Tabs
                            value={selectedTab}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            orientation={ isMediumScreen ? 'horizontal' : 'vertical' }

                            sx={{
                                borderLeft: 1, 
                                borderColor: 'var(--midnight-blue)',
                                borderWidth: isMediumScreen ? '0px' : '2px',
                                overflow: "visible",
                                /*minHeight:"2rem",*/
                                "& .MuiButtonBase-root":{
                                    /*minHeight: "1.875rem",*/
                                    //width: isMediumScreen ? 'auto' : '11.5rem',
                                
                                    color: "var(--midnight-blue)",
                                    fontSize: isMediumScreen ? '1rem' : '1.5rem',
                                    textTransform: "inherit",
                                    fontWeight: "400",
                                    padding: isMediumScreen ? '0 0 0 0rem' : '0 0 0 3.5rem',
                                    transition: "all ease-in 150ms",
                                    flexDirection: isMediumScreen ? 'row' : 'row-reverse',
                                    alignItems: "center",
                                    columnGap: isMediumScreen ? '.5rem' : '1rem',
                                    //minHeight:"2rem",
                                },
                                "& .MuiTabs-scroller":{
                                    /*marginRight: "0px",
                                    paddingRight: "2rem",
                                    paddingTop: "1.75rem",
                                    paddingBottom: "1.75rem"*/
                                    //overflow:  { isMediumScreen ? 'hidden' : 'visible' }
                                    overflowX:  isMediumScreen ? 'auto' : 'visible' ,
                                    overflowY:  isMediumScreen ? 'hidden' : 'visible' ,
                                },
                                "& .MuiTab-iconWrapper":{
                                    width: isMediumScreen ? '1.3rem' : '1.8rem',
                                    marginBottom: "0px !important"
                                },
                                "& .MuiTabs-flexContainer":{
                                    rowGap: ".25rem",
                                    alignItems: "flex-start"
                                },
                                "& .MuiTabs-indicator":{
                                    left: "-4px",
                                    width: "6px",
                                    borderRadius: "3px",
                                    backgroundColor:"var(--azure-blue)",
                                    display: isMediumScreen ? 'none' : 'block' ,
                                },
                                " .MuiTabs-flexContainer button":{
                                    marginRight: isMediumScreen ? '1.55rem' : '0rem',
                                },
                                " .MuiButtonBase-root.Mui-selected":{
                                    color: "var(--azure-blue)",
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
                            industryWithEcommerce.map( (industry) => (
                                <Tab
                                    key={industry.id}
                                    label={industry.name}
                                    value={industry.id}
                                    icon={<img src={industryIcons(`./${industry["image-ecommerce"]}`)} alt={industry.name} />}
                                />
                            ) )
                        }
                        </Tabs>
                    </div>
                    <div className='e-commerce-solutions-swiper'>
                        <div className="e-commerce-solutions-list">
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
                                    filteredData.map( ( solution ) => (
                                        <SwiperSlide key={ solution.id }>
                                            <h5>{solution.name}</h5>
                                            <div className='e-commerce-solution-text' dangerouslySetInnerHTML={{ __html: solution.description }} />

                                            <div className="solutions-grid-capabilities-group">
                                                { solution.capabilities.map((capId) => {
                                                    const capability = CapabilitiesList.find((c) => c.id === capId);
                                                    return <div key={ capability.id } className="solutions-capability">{capability.name}</div>;
                                                })}
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
        <MainCase
            className = { "e-commerce" } 
            selectedCase={selectedCase} 
            industryName = "Relevant"
            arrow="var(--deep-blue)"
            backgroundImage="background-case-e-commerce.png"
            backgroundColor="var(--deep-blue)"
        />
    </>
  );
};

export default ChooseIndustry;