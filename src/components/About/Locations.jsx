import { ReactComponent as BgrBean } from './../../images/svg/bgr-bean.svg';

import NewYorkPicure from '../../images/picture-newyork.jpg'
import DurangoPicure from '../../images/picture-durango.jpg'

const Locations = () => {
  return (
    <>
      <section className="about-locations">

        <div className='BgrBean BgrBean-401'>
            <BgrBean />
        </div>

        <div className='BgrBean BgrBean-402'>
            <BgrBean />
        </div>
        <div className='BgrBean BgrBean-403'>
            <BgrBean />
        </div>

        <div className="bgr-noise"></div>

        <div className="about-locations-content containerFull">
          <div className="locations-headline">
            <h1>Office Locations.</h1>
          </div>

          <div className='locations-cities'>
            <div className='locations-city'>
              <h3>New York, US.</h3>
              <p>1180 Avenue of the Americas 8th Floor <br />New York, NY 10036, United States</p>
              <p>Phone: (212) 512-0500</p>
              <img 
                src={ NewYorkPicure }
                alt='Advante New York'
              />
            </div>

            <div className='locations-city'>
              <h3>Durango, MX.</h3>
              <p>Boulevard Durango 1406Q, Barrio de Tierra Blanca <br />Durango, Dgo 34110, México</p>
              <p>Phone: (212) 512-0500</p>
              <img 
                src={ DurangoPicure }
                alt='Advante Durango'
              />
            </div>

          </div>

        </div>

        <div className='about-wave'>
          <svg viewBox="0 0 1920 140">
              <path/>
          </svg>
        </div>

      </section>

    </>
  );
};

export default Locations;
