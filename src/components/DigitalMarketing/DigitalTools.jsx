
import ServicesList from "../../jsons/design-services.json";
const firstService = ServicesList[0];
const technologies = firstService && firstService.technologies ? firstService.technologies : [];

const designServiceTech = require.context('../../images/graphic-design-technologies', true );

const DigitalTools = () => {
    return(
        <section className="digital-marketing-tools">
            <div className="containerFull digital-marketing-tools-wrapper">
              
                <div className="tools-text">
                    <span>T</span>
                    <span>O</span>
                    <span>O</span>
                    <span>L</span>
                    <span>S</span>
                </div>
                <div className="tools-icons">
                    <ul className="design-service-technologies-list">
                    {
                        technologies.map( (technology, index) => (
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
        </section>
    )
}

export default DigitalTools;