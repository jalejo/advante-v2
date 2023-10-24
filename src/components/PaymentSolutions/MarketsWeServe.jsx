
import { useState } from "react";
import MainCase from "../MainCase";


import "./styles.css"

import CasesList from '../../jsons/cases.json';
import IndustryList from '../../jsons/industry.json'
import SolutionsList from '../../jsons/solutions.json'

import Solutions from "./Solutions";


const industryImages = require.context('../../images/industry', true );
const industryWithImagePayment = IndustryList.filter(item => item.hasOwnProperty("image-payment"));

const ExpertiseServices = () => {

    const [selectedIndustryId, setSelectedIndustryId] = useState(1);
    const [selectedCase, setSelectedCase] = useState(CasesList[0])
    
    const [selectedIndustryName, setSelectedIndustryName] = useState(IndustryList[0].name);

    const filteredData = SolutionsList.filter(item => item.industry.includes(1) && item.services.includes(1));

    const handleChange = (event, industryId, industryName) => {
        setSelectedIndustryId(industryId);
        setSelectedIndustryName(industryName);

    };

      
    return (
        <section className="payment-markets">

            <div className="containerFull payment-markets-wrapper">
                <h3>Markets <span className="text-violet-green">We Serve</span>.</h3>
             
                <div className="payment-industry-grid">
                    {
                        industryWithImagePayment.map((industry) =>( 
                            <div className={`payment-industry-item ${industry.id === selectedIndustryId ? 'active' : ''}`} key={ industry.id }>
                                <div className="payment-industry-card" onClick={(event) => handleChange(event, industry.id, industry.name )} >
                                    <div className="payment-industry-overlay"></div>
                                    <img 
                                        src={industryImages(`./${industry["image-payment"]}`)}
                                        alt={ industry.name }
                                    />
                                    <p>{ industry.name }</p>
                                </div>
                            </div> 
                        ) )
                    }
                </div>
            </div>

            <Solutions 
                industryName = { selectedIndustryName }
                solutionList = { filteredData }
            />

            <MainCase 
                selectedCase={selectedCase} 
                industryName = "Relevant"
                titleColor="text-green-violet"
            />

        </section>
    );
  }
  
  export default ExpertiseServices;