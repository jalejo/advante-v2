import { ReactComponent as BgrBean } from './../../images/svg/bgr-bean.svg';
import logo from '../../images/logo_advante.png'

import ClientsList from '../../jsons/clients.json'
const clientsImages = require.context('../../images/logo-clients', true );

const Header = () => {
  return (
    <div className='about-all-section'>
      <section className="about-header">
        <div className='BgrBean BgrBean-01'>
            <BgrBean />
        </div>
        <div className='BgrBean BgrBean-02'>
            <BgrBean />
        </div>
        <div className="bgr-noise"></div>
        <div className="containerFull">

          <div className="about-headline">
            <h1>BEHIND <br /><span>THE</span> SCENES.</h1>
          </div>

        </div>
      </section>

      <section className="about-main">
        <div className='about-wave'>
          <svg viewBox="0 0 1920 140">
              <path/>
          </svg>
        </div>
        <div className='BgrBean BgrBean-201'>
            <BgrBean />
        </div>
        
        <div className='BgrBean BgrBean-202'>
            <BgrBean />
        </div>
      
        <div className='BgrBean BgrBean-203'>
            <BgrBean />
        </div>
    
        <div className='BgrBean BgrBean-204'>
            <BgrBean />
        </div>

        <div className="bgr-noise"></div>
        <div className="about-about containerFull">
          <div className='about-about-grid'>
            <div className='about-who'>
              <h3>Who <span>we</span>  are.</h3>
              <p>Provider of technology and software for multiple industries. Our team comprises software engineers, data scientists, UX designers, graphic designers, testers, and project managers; all to help our clients build and enhance their software platforms, websites, apps, and more.</p>
            </div>
            <div className='about-logo'>
              <img 
                src={logo} 
                alt="Logo Advante" 
              />
            </div>
            <div className='about-experience'>
              <h3><span>Our</span> Experience.</h3>
              <p>We have been in the industry for over 15 years, always striving to incorporate the latest technologies for our clients. However, we have not forgotten our humble beginnings. It is important to us to have a scalable technology stack for the products we create that expands at the same rate or even faster than our own growth over the years.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-clients">

        <div className='BgrBean BgrBean-301'>
            <BgrBean />
        </div>
      
        <div className='BgrBean BgrBean-302'>
            <BgrBean />
        </div>

        <div className="bgr-noise"></div>

        <div className='about-clients-box containerFull'>
          <div className='about-clients-headline'>
            <h2>Long term relationships with our clients.</h2>
          </div>
          <div className='about-clients-copy'>
            <p>We have been working with various brands and partners across the United States to provide them with the best results. Our developers continue to improve our technology to provide better services.</p>
            <p>Our ultimate objective is to deliver outstanding service and assistance to our clients, enabling them to attain their business goals.</p>
          </div>
        </div>

        
          <div className='clients-list-wrapper'>
            <div className='clients-list-track'>
              {
                ClientsList.map((client) => (
                  <div key={ client.id }>
                    <img 
                      src={clientsImages(`./${client.file}`)}
                      alt={client.name}
                    />
                  </div>
                ))
              }
            </div>
          </div>

      </section>
    </div>
  );
};

export default Header;
