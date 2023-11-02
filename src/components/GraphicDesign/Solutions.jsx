import { useState } from "react";
import CapabilitiesList from '../../jsons/capabilities.json'


const Solutions = (props) => {

    const solutionList = props.solutionList; 

    const [isActive, setIsActive] = useState(false);

    return (
        <section className="design-solutions">
       
           
            <div className="design-solutions-wrapper">
                
                <div className="design-solutions-list-wrapper">
                    {
                        solutionList.slice(0, 3).map((solution) => (
                            <div key={ solution.id } className="design-solutions-item"> 
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