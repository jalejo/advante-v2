import advanteTeam from "../../images/advante-team.png"

const OurTeam = () => {
  return (
    <>
      <section className="about-team">

        <div className="bgr-noise"></div>

        <div className="bgr-white-bottom"></div>

        <div className='about-wave'>
          <svg viewBox="0 0 1920 140">
              <path/>
          </svg>
        </div>
        
        <div className="about-team-content containerFull">
          <div className="team-headline">
            <h1>Our <span>Passionate</span> Team.</h1>
          </div>
          <div className="team-image">
            <img 
              src={advanteTeam} 
              alt="Advante Team" 
            />
          </div>
        </div>

      </section>

    </>
  );
};

export default OurTeam;
