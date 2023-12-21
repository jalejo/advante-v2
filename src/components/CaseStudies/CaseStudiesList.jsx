import CaseStudiesLis from "../../jsons/case-studies.json"

import IcoArrowThin from "../../images/svg/IcoArrowThin";

const CasePath = require.context('../../images/cases', true );


const CaseStudiesList = () => {
  return (
    <section className="case-studies-list">
        <div className="containerFull">
            {
                CaseStudiesLis.map( caseStudy => (
                    <div className="case-study-card" key={ caseStudy.id }>
                        <div className="case-study-image">

                            <img 
                                src={CasePath(`./${ caseStudy["featured-image"] }`)} 
                                alt={caseStudy.client} 
                            />

                        </div>
                        <div 
                            className="case-study-content"
                            style={{ backgroundColor: caseStudy.color + '10'} }
                        >
                            <h6>{ caseStudy.client}</h6>
                            <p>{ caseStudy.content }</p>
                            <ul className="case-study-thumbnail">
                                {
                                    caseStudy["gallery-images"].map( (caseThumbnail, index )=> (
                                        <li key={index}> 
                                            <img 
                                                src={ CasePath(`./${ caseThumbnail }`) }
                                            />
                                        </li>
                                    )  )
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  );
};

export default CaseStudiesList;
