import { useState } from "react";
import CapabilitiesList from '../../jsons/capabilities.json'

const IconPath = require.context('../../images/solutions', true );

const Solutions = (props) => {

    const solutionList = props.solutionList; 
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="market-solutions">
       
           
            <div className="market-solutions-wrapper">
                
                <div className="market-solutions-list-wrapper">
                    {
                        solutionList.slice(0, 3).map((solution) => (
                            <div key={ solution.id } className="market-solutions-item">
                                <div className="market-solutions-item-ico">
                                    {IconPath.keys().includes(`./${solution.icon1}`) ? (
                                        <img 
                                            src={  IconPath(`./${solution.icon1}`) }
                                            alt={ solution.name }
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                            }}
                                        />
                                    ) : (
                                        <p>icon not found</p>
                                      )}
                                </div>
                                <div className="market-solutions-item-text">
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