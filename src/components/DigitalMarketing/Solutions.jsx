import { useState } from "react";
import CapabilitiesList from '../../jsons/capabilities.json'

const IconPath = require.context('../../images/solutions', true );

const Solutions = (props) => {

    const solutionList = props.solutionList; 
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="digital-solutions">
       
           
            <div className="digital-solutions-wrapper">
                
                <div className="digital-solutions-list-wrapper">
                    {
                        solutionList.slice(0, 3).map((solution) => (
                            <div key={ solution.id } className="digital-solutions-item">
                                <div className="digital-solutions-item-ico">
                                    {IconPath.keys().includes(`./${solution.image1}`) ? (
                                        <img 
                                            src={  IconPath(`./${solution.image1}`) }
                                            alt={ solution.name }
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                            }}
                                        />
                                    ) : (
                                        <p>icon not found</p>
                                      )}
                                </div>
                                <div className="digital-solutions-item-text">
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