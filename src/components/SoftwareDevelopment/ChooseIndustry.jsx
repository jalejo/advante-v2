import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from "react";
import MainCase from "../MainCase";

import CasesList from '../../jsons/cases.json';
import IndustryList from '../../jsons/industry.json'
import SolutionsList from '../../jsons/solutions.json'
import Solutions from './Solutions';


const industryMarket = IndustryList.filter(item => item.hasOwnProperty("service-development"));


const ChooseIndustry = () => {

    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [selectedTab, setSelectedTab] = useState(1);
    const [selectedCase, setSelectedCase] = useState(CasesList[8])

    const filteredData = SolutionsList.filter(item => item.industry.includes(selectedTab) && item.services.includes(1));

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return(
        <section className="development-industry">
            <div className='developmentIndustryWrapper'>
                <div className="containerFull">
                    <h3>Choose the Industry you are interested in.</h3>
        

                    <div className='development-solutions-section' >
                

                        <div className='development-industry-list'>
                            <Tabs
                                value={selectedTab}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                orientation= 'horizontal'
                                
                                sx={{
                                    "& .MuiTabs-scroller":{
                                        marginRight: "0px",
                                        paddingRight: "2rem",
                                        paddingTop: "1.75rem",
                                        paddingBottom: "1.75rem"
                                    },
                                    "& .MuiTabs-indicator":{
                                    display: "none",
                                    },
                                    "& .MuiButtonBase-root":{
                                        minHeight: "1.875rem",
                                        borderRadius: "10rem",
                                        color: "var(--white-color)",
                                        fontSize: "0.875rem",
                                        textTransform: "inherit",
                                        fontWeight: "500",
                                        padding: "0.25rem 2rem",
                                        backgroundColor:"var(--navy-blue)",
                                        transition: "all ease-in 150ms",
                                    },
                                    " .MuiTabs-flexContainer":{
                                        justifyContent: "space-between"
                                    },
                                    " .MuiTabs-flexContainer button":{
                                        marginRight: isMediumScreen ? '.55rem' : '.75rem',
                                        width: "10.6rem"
                                    },
                                    " .MuiButtonBase-root.Mui-selected":{
                                        fontWeight:"500",
                                        color: "var(--white-color)",
                                        background:"var(--azure-blue)",
                                        boxShadow:"10px 10px 20px rgb(0 0 0 / 10%)",
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
                                industryMarket.map((industry) => (
                                    <Tab
                                        key={industry.id}
                                        label={industry.name}
                                        value={industry.id}
                                    />
                                ))
                            }
                            </Tabs>
                        </div>
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
                className = { "software-development" }
                industryName = "Relevant"
                titleColor="text-violet-pink-blue-orange-red"
                arrow="var(--orchid-pink)"
                backgroundColor="var(--deep-blue)"
                textColor="var(--white-color)"
            />
         
        </section>
    );
}
  
export default ChooseIndustry;
