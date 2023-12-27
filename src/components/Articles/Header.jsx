import { Link } from "react-router-dom";
import IcoArrowThin from "../../images/svg/IcoArrowThin";

import IcoSocialLinkedin from '../../images/svg/IcoSocialLinkedin';
import IcoSocialFacebook from '../../images/svg/IcoSocialFacebook';
import IcoSocialInstagram from '../../images/svg/IcoSocialInstagram';


const path = require.context('../../images/articles', true)


const Header = ( { type, title, subtitle, bgImage } ) => {
  return (

      <section className="articles-header">

        <div className="articles-header-wrapper" style={{ backgroundImage: `url(${path(`./${bgImage}`)})` }}>

          <div className="bgr-noise"></div>
          <div className="containerFull">
            { 
              type === "article" && 
              <>
                <div className="all-articles-link-wrapper containerFull"> 
                  <Link to={ "/articles"} className="all-articles-link" >
                    <IcoArrowThin color='var(--light-gray)' />
                    <span>all articles</span>
                  </Link>
                </div>
                <div className="all-articles-link-social containerFull"> 
                  <ul className='social-list-article'>
                    <li><IcoSocialLinkedin /></li>
                    <li><IcoSocialFacebook /></li>
                    <li><IcoSocialInstagram  /></li>
                  </ul>
                </div>
              </>
            }

            <div className="articles-header-text">
              { 
                type === "articles-grid" ? <h1>{ title }</h1> : <h2>{ title }</h2>
              }
              
              <p>{ subtitle }</p>
            </div>
            
          </div>
        </div>
      </section>

  );
};

export default Header;
