import { useState } from "react";
import CapabilitiesList from '../../jsons/capabilities.json'


const Solutions = (props) => {

    const industryName = props.industryName;
    const solutionList = props.solutionList; 

    const [isActive, setIsActive] = useState(false);

    return (
        <section id="payment-solutions-section" className="payment-solutions">
            <div className="payment-industry-big-name">
                { industryName }
            </div>
            <div className="bgr-noise"></div>
            <div className="containerFull payment-solutions-wrapper">
                <h3>Solutions.</h3>
                <div className="payment-solutions-list-wrapper">
                    {
                        solutionList.map((solution) => (
                            <div key={ solution.id } className="payment-solutions-item"> 
                                <h6>{ solution.name }</h6>
                                <p>{ solution.description }</p>

                                <div className="solutions-grid-capabilities-group">
                                    { solution.capabilities.map((capId) => {
                                        const capability = CapabilitiesList.find((c) => c.id === capId);
                                        return <div key={ capability.id } className="solutions-capability">{capability.name}</div>;
                                    })}
                                </div>

                            </div>
                        )
                        )
                    }
                </div>
                
            </div>
        </section>
    );
  }
  
  export default Solutions;