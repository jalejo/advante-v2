import React from 'react';
import GuyVRinteractive from '../images/guy-vr-interactive.jpg'

const Hero = () => {
  return (
    <section className='heroWrapper'>
      
      <div className='containerFull'>

        <div className='sliderWrapper'>
          <div className='heroSlide heroSlide-1'>
            <div className='heroTextWrapper'>
              <h2>Your best <br /><span className='text-pink-orange'>technological partner</span>.</h2>
              <p>You have the idea, we have the tools.</p>
              <a className='baseButton midnightkBttn'>Chat with us</a>
            </div>
            <div className='heroImageWrapper'>
              <div className='heroImage'>
                <img src={ GuyVRinteractive } />
              </div>
            </div>
          </div>
        </div>

        <div className='bgCircle bgCircle-pink'></div>
        <div className='bgCircle bgCircle-orange'></div>
        <div className='bgCircle bgCircle-red'></div>

      </div>
    </section>

  );
}

export default Hero;