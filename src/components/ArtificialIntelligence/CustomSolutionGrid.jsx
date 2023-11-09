const customSolutionImage = require.context('../../images/ai-solutions', true );

const CustomSolutionGrid = ( props ) => {

    const { title , mainContent, mainImage, beforeContent, afterContent, currentPlatforms } = props.allData;


    return(
        <div className="custom-solution-grid">
            <div className="custom-solution-main">
                <h4>{ title }</h4>
                <div dangerouslySetInnerHTML={{ __html: mainContent }} />
                
                <div className="custom-solution-platforms">
                    <p><span>If your business is using platforms like these:</span></p>
                    <ul>
                        {
                            currentPlatforms.map((currentPlat, index) => (
                                <li key={ index }>
                                    <img 
                                        src={customSolutionImage(`./${currentPlat}`)}
                                        alt={ title }
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="custom-solution-image">
            <img 
            src={customSolutionImage(`./${mainImage}`)}
            alt={ title }
            />
            </div>
            <div className="custom-solution-before">
                <h6>Before</h6>
                <div dangerouslySetInnerHTML={{ __html: beforeContent }} />
            </div>
            <div className="custom-solution-after">
                <h6>After Advante Artificial Intelligence implementation</h6>
                <div dangerouslySetInnerHTML={{ __html: afterContent }} />
            </div>
            
        </div>
    );
}

export default CustomSolutionGrid;