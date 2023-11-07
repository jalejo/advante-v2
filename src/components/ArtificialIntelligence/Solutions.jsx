import { useState } from "react";
import CapabilitiesList from '../../jsons/capabilities.json'

const aiIconPath = require.context('../../images/solutions', true );

const Solutions = (props) => {

    const solutionList = props.solutionList; 
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="ai-solutions">
       
           
            <div className="ai-solutions-wrapper">
                
                <div className="ai-solutions-list-wrapper">
                    {
                        solutionList.slice(0, 3).map((solution) => (
                            <div key={ solution.id } className="ai-solutions-item">
                                <div className="ai-solutions-item-ico">
                                    {aiIconPath.keys().includes(`./${solution.icon2}`) ? (
                                        <img 
                                            src={  aiIconPath(`./${solution.icon2}`) }
                                            alt={ solution.name }
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                            }}
                                        />
                                    ) : (
                                        <p>icon not found</p>
                                      )}
                                </div>
                                <div className="ai-solutions-item-text">
                                    <h6>{ solution.name }</h6>
                                    <p>{ solution.description }</p>

                                    <div className="solutions-grid-capabilities-group">
                                        { solution.capabilities.map((capId) => {
                                            const capability = CapabilitiesList.find((c) => c.id === capId);
                                            return <div key={ capability.id } className="solutions-capability">{capability.name}</div>;
                                        })}
                                    </div>
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