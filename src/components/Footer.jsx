import { useLocation } from 'react-router-dom';

import IcoSocialLinkedin from '../images/svg/IcoSocialLinkedin';
import IcoSocialFacebook from '../images/svg/IcoSocialFacebook';
import IcoSocialYoutube from '../images/svg/IcoSocialYoutube';
import IcoSocialInstagram from '../images/svg/IcoSocialInstagram';
import IcoArrowThin from '../images/svg/IcoArrowThin';

import logo from '../images/logo_advante.png'

const Footer = () => {

  const location = useLocation();

  const pageData = {
    default: {
      background: 'var(--royal-purple)',
      color: 'var(--white-color)',
      button: 'var(--gradient-pink-orange)',
      textButton: 'var(--white-color)',
      socialCircle:'var(--vivid-purple)',
      socialIcon:'var(--royal-purple)',
      logo: 'var(--logo-white)',
    },
    '/': {
      background: 'var(--royal-purple)',
      color: 'var(--white-color)',
      button: 'var(--gradient-pink-orange)',
      textButton: 'var(--white-color)',
      socialCircle:'var(--vivid-purple)',
      socialIcon:'var(--royal-purple)',
      logo: 'var(--logo-white)',
    },
    '/services/software-development': {
      background: 'var(--white-color)',
      color: 'var(--navy-blue)',
      button: 'var(--gradient-violet-pink-blue-orange-red)',
      textButton: 'var(--white-color)',
      socialCircle:'var(--light-gray)',
      socialIcon:'var(--slate-gray)',
      logo: 'var(--logo-black)',
    },
    '/services/payment-solutions': {
      background: 'var(--royal-purple)',
      color: 'var(--white-color)',
      button: 'var(--gradient-darkviolet-green)', 
      textButton: 'var(--white-color)',
      socialCircle:'var(--vivid-purple)',
      socialIcon:'var(--royal-purple)',
      logo: 'var(--logo-white)',
    },
    '/services/graphic-design': {
      background: 'var(--white-color)',
      color: 'var(--navy-blue)',
      button: 'var(--gradient-blue-violet-pink-balanced)', 
      textButton: 'var(--white-color)',
      socialCircle:'var(--light-gray)',
      socialIcon:'var(--slate-gray)',
      logo: 'var(--logo-black)',
    },
    '/services/artificial-intelligence': {
      background: 'var(--deep-blue)',
      color: 'var(--white-color)',
      button: 'var(--gradient-pink-orange)', 
      textButton: 'var(--white-color)',
      socialCircle:'var(--navy-blue)',
      socialIcon:'var(--midnight-blue)',
      logo: 'var(--logo-white)',
    },
    '/services/market-analysis': {
      background: 'var(--deep-blue)',
      color: 'var(--white-color)',
      button: 'var(--sky-blue)', 
      textButton: 'var(--white-color)',
      socialCircle:'var(--navy-blue)',
      socialIcon:'var(--midnight-blue)',
      logo: 'var(--logo-white)',
    },
    '/services/e-commerce': {
      background: 'var(--white-color)',
      color: 'var(--midnight-blue)',
      button: 'var(--gradient-blue-orange-pink)', 
      textButton: 'var(--white-color)',
      socialCircle:'var(--light-gray)',
      socialIcon:'var(--slate-gray)',
      logo: 'var(--logo-black)',
    },
    '/services/platform-integrations': {
      background: 'var(--dark-blue)',
      color: 'var(--white-color)',
      button: 'var(--coral-red)', 
      textButton: 'var(--white-color)',
      socialCircle:'var(--pale-blue)',
      socialIcon:'var(--dark-blue)',
      logo: 'var(--logo-white)'
    },
    '/services/digital-marketing': {
      background: 'var(--white-color)',
      color: 'var(--navy-blue)',
      textButton: 'var(--white-color)',
      socialCircle:'var(--light-gray)',
      socialIcon:'var(--slate-gray)',
      logo: 'var(--logo-black)',
      className: 'footer-digital-marketing'
    },
    '/services/software-product-design': {
      background: 'var(--deep-blue)',
      color: 'var(--white-color)',
      button: 'var(--green-teal)', 
      textButton: 'var(--white-color)',
      socialCircle:'var(--navy-blue)',
      socialIcon:'var(--midnight-blue)',
      logo: 'var(--logo-white)',
    },
    '/about': {
      background: 'var(--white-color)',
      color: 'var(--navy-blue)',
      textButton: 'var(--white-color)',
      socialCircle:'var(--light-gray)',
      socialIcon:'var(--slate-gray)',
      logo: 'var(--logo-black)',
      button: 'var(--midnight-blue)',
    },
    '/case-studies': {
      background: 'var(--white-color)',
      color: 'var(--navy-blue)',
      textButton: 'var(--white-color)',
      socialCircle:'var(--light-gray)',
      socialIcon:'var(--slate-gray)',
      logo: 'var(--logo-black)',
      button: 'var(--midnight-blue)',
    }
  };

  const currentPageData = pageData[location.pathname] || pageData.default;

  return (
    <footer
      className={currentPageData['className'] ? currentPageData['className'] : ''}
      style={{ 
        backgroundColor:currentPageData['background'],
        color: currentPageData['color']
      }}>
      <div className='footerWrapper containerFull'>
        <div className='logo-and-social-section'>
          <a  className='footerLogo' style={{ filter:currentPageData['logo'] }}><img src={logo} alt="Logo Advante" /></a>
          <ul className='social-list-wrapper'>
            <li style={{ backgroundColor:currentPageData['socialCircle'] }}><IcoSocialLinkedin color={ currentPageData['socialIcon'] } /></li>
            <li style={{ backgroundColor:currentPageData['socialCircle'] }}><IcoSocialFacebook color={ currentPageData['socialIcon'] } /></li>
            <li style={{ backgroundColor:currentPageData['socialCircle'] }}><IcoSocialYoutube color={ currentPageData['socialIcon'] } /></li>
            <li style={{ backgroundColor:currentPageData['socialCircle'] }}><IcoSocialInstagram  color={ currentPageData['socialIcon'] } /></li>
          </ul>
        </div>
        <div className='btn-call-section'>
          <a className='thinButton' style={{ background: currentPageData['button'] }}>
            <span style={{ color:currentPageData['textButton'] }} >Tell us about your project</span>
            <IcoArrowThin color='var(--white-color)' />
          </a>

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