import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { useState } from "react";
import MainCase from "../MainCase";

import CasesList from '../../jsons/cases.json';
import IndustryList from '../../jsons/industry.json'
import SolutionsList from '../../jsons/solutions.json'
import Solutions from './Solutions';


const industryDigital = IndustryList.filter(item => item.hasOwnProperty("service-digital"));


const ChooseIndustry = () => {

    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [selectedTab, setSelectedTab] = useState(1);
    const [selectedCase, setSelectedCase] = useState(CasesList[12])

    const filteredData = SolutionsList.filter(item => item.industry.includes(selectedTab) && item.services.includes(9));

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return(
        <section className="digital-industry">
            <div className='digitalIndustryWrapper'>
                
                <div className='containerFull'>
                    <h3 className='center'>Our broad market <span>experience</span>.</h3>
                </div>

                <div className='digital-solutions-section' >
            
                    <div className='digital-industry-list'>
                        <div className="containerFull">
                            <Tabs
                                value={selectedTab}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                orientation= 'horizontal'
                                
                                sx={{
                                    minHeight: "6.5rem",
                                    "& .MuiTabs-scroller":{
                                        marginRight: "0px",
                                        paddingRight: "2rem",
                                        display: "flex",
                                        alignItems: "center",
                                    },
                                    "& .MuiTabs-indicator":{
                                        
                                        height: "3.75rem",
                                        borderRadius: "20px",
                                        zIndex:"1",
                                        boxShadow: "4px 9px 12px rgb(0 0 0 / 20%)",
                                        top: 0,
                                        bottom: 0,
                                        margin: "auto"
                                    },
                                    "& .MuiButtonBase-root":{
                                        minHeight: "1.875rem",
                                        color: "var(--white-color)",
                                        fontSize: isMediumScreen ? '.0.75rem' : '1rem',
                                        textTransform: "inherit",
                                        fontWeight: "600",
                                        padding: "0.25rem 1rem",
                                        transition: "all ease-in 150ms",
                                    },
                                    " .MuiTabs-flexContainer":{
                                        justifyContent: "space-between",
                                        position: "relative",
                                        zIndex: "5",
                                    },
                                    " .MuiTabs-flexContainer button":{
                                        marginRight: isMediumScreen ? '.55rem' : '.75rem',
                                        width: "10.6rem"
                                    },
                                    " .MuiButtonBase-root.Mui-selected":{
                                        
                                        color: "var(--white-color)",
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
                                industryDigital.map((industry) => (
                                    <Tab
                                        key={industry.id}
                                        label={industry.name}
                                        value={industry.id}
                                    />
                                ))
                            }
                            </Tabs>
                        </div>
                    </div>

                    <div className="containerFull">
                        <div className='ai-solutions-list'>
                            <h3>Solutions</h3>
                            <Solutions 
                                solutionList = { filteredData }
                            />
                        </div>
                    </div>

                </div>


               
            </div>
            <MainCase 
                selectedCase={selectedCase} 
                industryName = "Relevant"
                className = { "digital-marketing" } 
            />
         
        </section>
    );
}
  
export default ChooseIndustry;
