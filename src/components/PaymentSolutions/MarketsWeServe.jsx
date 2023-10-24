
import { useState } from "react";
import MainCase from "../MainCase";


import "./styles.css"

import CasesList from '../../jsons/cases.json';
import IndustryList from '../../jsons/industry.json'


const industryImages = require.context('../../images/industry', true );



const industryWithImagePayment = IndustryList.filter(item => item.hasOwnProperty("image-payment"));

const ExpertiseServices = () => {

    const [selectedCase, setSelectedCase] = useState(CasesList[0])

    return (
        <section className="payment-markets">

            <div className="containerFull payment-markets-wrapper">
                <h3>Markets <span className="text-violet-green">We Serve</span>.</h3>
             
                <div className="payment-industry-grid">
                    {
                        industryWithImagePayment.map((industry) =>( 
                            <div className="payment-industry-item" key={ industry.id }>
                                <div className="payment-industry-card">
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
            
            <MainCase selectedCase={selectedCase} />

        </section>
    );
  }
  
  export default ExpertiseServices;