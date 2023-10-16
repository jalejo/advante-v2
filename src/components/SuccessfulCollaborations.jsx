import React from 'react';
import collaborationGroup from '../images/collaborations-group.png'

const SuccessfulCollaborations = () => {
  return (
    <section className='collaborationsWrapper'>
      <div className='containerFull'>
        <h3>Successful <span className='text-orange-pink'>Collaborations</span></h3>
        <div className='collaboration-logos'>
          <img src={ collaborationGroup } />
        </div>
        <div className='collaboration-footer'>
          <p>Do you want to give tech power to your company and partner with us by expanding services provided to your clients? </p>
          <a className='baseButton orangePinkGradientBttn'>Partner with us</a>
        </div>
        
      </div>

    </section>

  );
}

export default SuccessfulCollaborations;