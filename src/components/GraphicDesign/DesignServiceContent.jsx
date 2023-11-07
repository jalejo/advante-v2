const designServiceTech = require.context('../../images/graphic-design-technologies', true );

const DesignServiceContent = ( props ) => {

    const selectedService = props.selectedService;

    return(
        <div>
            {
                <div className="design-service-content">
                    <div className="design-service-features">
                        <ul>
                        {
                            selectedService.features.map( (feature, index) => (
                                    <li key={index}>{feature}</li>
                            )  )
                        }
                        </ul>
                    </div>
                    <div className="design-service-technologies">
                        <h4>Technologies</h4>
                        <ul className="design-service-technologies-list">
                        {
                            selectedService.technologies.map( (technology, index) => (
                                    <li key={index}>
                                        <img 
                                            src={designServiceTech(`./${technology}`) } 
                                            alt={technology.split('.').slice(0, -1).join('.').replace(/-/g, ' ')}
                                        />
                                    </li>
                            )  )
                        }
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default DesignServiceContent;