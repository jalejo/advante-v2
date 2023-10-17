import IcoArrowThin from '../images/svg/IcoArrowThin';
import HealthareCase from '../images/healthcare-case.jpg'

const MainCase = () => {
  return (
    <section className='mainCaseWrapper'>
      <div className='containerFull'>
        <h3><span className='text-orange-violet-pink'>Healthcare</span> case.</h3>

        <div className='mainCase-grid'>
          <div className='mainCase-grid-image'>
            <img src={ HealthareCase}></img>
          </div>
          <div className='mainCase-grid-text'>
            <h6>Online Expansion and Market Positioning Strategy</h6>
            <p>Our client was interested in selling their gourmet chocolate products online, as well as establishing their presence as a company and positioning themselves in the market.</p>
            <div className='mainCase-grid-capabilities-group'>
              <div className="mainCase-capability">Web development</div>
              <div className="mainCase-capability">E-commerce</div>
              <div className="mainCase-capability">Testing</div>
            </div>
          </div>
          <div className='mainCase-grid-footer'>
            <a className='see-more-btn'>
              <span>See case</span> 
              <IcoArrowThin color='var(--tangerine-orange)' />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainCase;