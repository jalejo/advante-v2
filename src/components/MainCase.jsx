import IcoArrowThin from '../images/svg/IcoArrowThin';
import CapabilitiesList from '../jsons/capabilities.json'

const caseImage = require.context('../images/cases', true );

const MainCase = (props) => {

  const { selectedCase, industryName, titleColor, arrow, backgroundImage, backgroundColor, textColor } = props;

  
  console.log("🍄 ~ file: MainCase.jsx:10 ~ selectedCase:", selectedCase)

  return (
    <section 
      className='mainCaseWrapper' 
      style={{ 
        backgroundImage: backgroundImage ? `url(${caseImage(`./${backgroundImage}`)})` : 'none', 
        backgroundColor: backgroundColor ? backgroundColor : '',
        color: textColor ? textColor : '',
      }}
    >
      <div className='containerFull'>
        <h3><span className={ titleColor }>{ industryName }</span> case.</h3>

        <div className='mainCase-grid'>
          <div className='mainCase-grid-image'>
            {
            <img 
              src={caseImage(`./${selectedCase.image}`)}
              alt={ selectedCase.case }
            />
            }
          </div>
          <div className='mainCase-grid-text'>
            <h6>{ selectedCase.title }</h6>
            <p>{ selectedCase.content }</p>
            <div className='mainCase-grid-capabilities-group'>

              { 
                selectedCase.capabilities.map((capId) => {
                  const capability = CapabilitiesList.find((c) => c.id === capId);
                  return <div key={ capability.id } className="mainCase-capability">{capability.name}</div>;
                })
              }
            </div>
          </div>
          <div className='mainCase-grid-footer'>
            <a className='see-more-btn'>
              <span className={ titleColor }>See case</span> 
              <IcoArrowThin color={ arrow } />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainCase;