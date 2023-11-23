import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from "react";
import MainCase from "../MainCase";

import CasesList from '../../jsons/cases.json';
import IndustryList from '../../jsons/industry.json'
import SolutionsList from '../../jsons/solutions.json'
import Solutions from './Solutions';


import BgrGrid from '../../images/union-grid.png'

const industryDesign = IndustryList.filter(item => item.hasOwnProperty("service-design"));


const IndustriesWeWork = () => {

    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [selectedTab, setSelectedTab] = useState(1);
    const [selectedCase, setSelectedCase] = useState(CasesList[5])

    const filteredData = SolutionsList.filter(item => item.industry.includes(1) && item.services.includes(7));

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return(
        <section className="designIndustryWrapper">
            <div className="containerFull">
                <h3>Take a look to  the industries we work.</h3>
                <div className='blur-circle circle-orange circle-design'></div>
                <div className='blur-circle circle-pink circle-design'></div>
                <div className='blur-circle circle-violet circle-design'></div>
                <div className='blur-circle circle-blue circle-design'></div> 

                <div className='design-solutions-section'>
                    <div className='design-solutions-grid design-solutions-grid-top-right'>
                        <img src={ BgrGrid } alt="Background Grid" />
                    </div>
                    <div className='design-solutions-grid design-solutions-grid-bottom-left'>
                        <img src={ BgrGrid } alt="Background Grid" />
                    </div>

                    <div className='design-industry-list'>
                        <Tabs
                            value={selectedTab}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            orientation={ isMediumScreen ? 'horizontal' : 'vertical' }
                            
                            sx={{
                                "& .MuiTabs-scroller":{
                                    marginRight: "0px",
                                    paddingRight: "2rem",
                                    paddingTop: "1.75rem",
                                    paddingBottom: "1.75rem"
                                },
                                "& .MuiTabs-flexContainer":{
                                    rowGap: "1.876rem",
                                    alignItems: "flex-end"
                                },
                                "& .MuiTabs-indicator":{
                                display: "none",
                                },
                                "& .MuiButtonBase-root":{
                                    minHeight: "1.875rem",
                                    width: isMediumScreen ? 'auto' : '11.5rem',
                                    borderRadius: "10rem",
                                    color: "var(--white-color)",
                                    fontSize: "0.875rem",
                                    textTransform: "inherit",
                                    fontWeight: "500",
                                    padding: "0.25rem 2rem",
                                    backgroundColor:"rgb(255 255 255 / 30%)",
                                    transform: isMediumScreen ? 'translateX(0rem)' : 'translateX(-2rem)',
                                    transition: "all ease-in 150ms",
                                },
                                " .MuiTabs-flexContainer button":{
                                    marginRight: isMediumScreen ? '.55rem' : '0rem'
                                },
                                " .MuiButtonBase-root.Mui-selected":{
                                    color: "var(--midnight-blue)",
                                    fontWeight:"500",
                                    backgroundColor:"var(--white-color)",
                                    boxShadow:"10px 10px 20px rgb(0 0 0 / 10%)",
                                    transform: "translateX(0rem)"
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
                            industryDesign.map((industry) => (
                                <Tab
                                    key={industry.id}
                                    label={industry.name}
                                    value={industry.id}
                                />
                            ))
                        }
                        </Tabs>
                    </div>
                    <div className='design-solutions-list'>
                        <h5>Solutions.</h5>
                        <Solutions 
                            solutionList = { filteredData }
                        />
                       
                    </div>
                </div>


            </div>
            
            <MainCase
                className = { "graphic-design" }  
                selectedCase={selectedCase} 
                industryName = "Relevant"
                titleColor="text-orange-pink-violet-blue"
                arrow="var(--tangerine-orange)"
            />
         
        </section>
    );
}
  
export default IndustriesWeWork;
