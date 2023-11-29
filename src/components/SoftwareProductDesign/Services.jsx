import { Fragment, useState } from "react";

import ServiceSDList from '../../jsons/software-design-services.json'

import LayoutBottomSoftware from "../../images/software-layout-bottom.png"

const serviceIcoImage = require.context('../../images/icons', true );

const Services = () => {

    const [activeExpertise, setActiveExpertise] = useState(1);

    const handleExpertiseClick = (itemNumber) => {
        setActiveExpertise(itemNumber);
    };

    return (
        <section className="software-services">
            <div className="software-layout-bottom containerFull">
                <div className="software-layout-bottom-container">
                    <img 
                        src={ LayoutBottomSoftware }
                        alt="Layout Software"
                    />
                </div>
            </div>

            <div className="containerFull software-services-wrapper">
                <h3>Wide range of platform <br />and app <span>design</span></h3>

                <div className="software-services-grid">
                    {
                        ServiceSDList.map((softwareService) => (
                            <Fragment key={ softwareService.id }>
                                <div className={`software-services-item software-services-item-${ softwareService.id } ${activeExpertise === softwareService.id ? 'active' : ''}`} onClick={() => handleExpertiseClick(softwareService.id)}>
                                    <div className="software-services-text">
                                        <div className="software-services-ico">
                                            <img 
                                                src={serviceIcoImage(`./${softwareService.ico}`)}
                                                alt={ softwareService.title }
                                            />
                                        </div>
                                        
                                        <span> { softwareService.title } </span>
                                    </div>
                                </div>
                                <div className={`software-services-content software-services-content-${ softwareService.id } ${activeExpertise === softwareService.id ? 'active' : ''}`}>
                                    <div className='software-services-content-text' dangerouslySetInnerHTML={{ __html: softwareService.content }} />
                                </div>
                            </Fragment>
                        ))
                    }

                </div>
                
            </div>
        </section>
    );
  }
  
  export default Services;