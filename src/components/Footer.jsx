import IcoSocialLinkedin from '../images/svg/IcoSocialLinkedin';
import IcoSocialFacebook from '../images/svg/IcoSocialFacebook';
import IcoSocialYoutube from '../images/svg/IcoSocialYoutube';
import IcoSocialInstagram from '../images/svg/IcoSocialInstagram';

import logo from '../images/logo_advante.png'

const Footer = () => {
  return (
    <footer>
      <div className='footerWrapper containerFull'>
        <div className='logo-and-social-section'>
          <a  className='footerLogo'><img src={logo} alt="Logo Advante" /></a>
          <ul className='social-list-wrapper'>
            <li><IcoSocialLinkedin color='var(--royal-purple)' /></li>
            <li><IcoSocialFacebook color='var(--royal-purple)' /></li>
            <li><IcoSocialYoutube color='var(--royal-purple)' /></li>
            <li><IcoSocialInstagram  color='var(--royal-purple)' /></li>
          </ul>
        </div>
        <div className='btn-call-section'>
          <a className='baseButton pinkOrangeGradientBttn'><span>Tell us about your project</span></a>
        </div>
        <div className='company-info-section'>
          <p><span>Address:</span> 1180 Avenue of the Americans <br />8th Floor New York, NY 10036</p>
          <p><span>Phone:</span> (212) 512-05000</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;