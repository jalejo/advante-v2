import { Swiper, SwiperSlide } from "swiper/react";
import IcoArrowThin from "../../images/svg/IcoArrowThin";

import RolesList from "./../../jsons/roles.json"
import TeamList from "./../../jsons/team.json"


const teamPhoto = require.context('../../images/team', true );

const TeamBusiness = () => {
  return (
    <>
      <section className="about-business">
        <div className="about-business-content containerFull">
          <div className="business-headline">
            <div className="business-headline-text">
              <h1>Team dedicated to <span>supporting</span> your business.</h1>
            </div>
            <div className="business-headline-btn">

              <a className='see-more-btn'>
                <span>Hire an expert</span> 
                <IcoArrowThin color="var(--midnight-blue)" />
              </a>
            </div>
          </div>
        </div>

        <div className="about-business-grid">

          {
            RolesList.map((roles) =>(
              <div className="about-grid-stripe" key={ roles.id }>
                <div className="containerFull">
                  <h3>{roles.role}</h3>
                  <div className="team-swiper">
                    <Swiper
                      slidesPerView={ 'auto' }
                      centeredSlides={true}
                      spaceBetween={40}
                      breakpoints={{
                        600: {
                          spaceBetween : 140,
                          centeredSlides : false
                        }
                      }}
                    >
                      {
                        TeamList.filter((user) => user.role === roles.id).map((user) => (
                          <SwiperSlide key={user.id}>
                            
                            <img 
                              src={teamPhoto(`./${user.photo}`)}
                              alt={user.name}
                            />
                          </SwiperSlide>
                        ))
                      }
                    </Swiper>
                  </div>
                </div>
              </div>
            ) ) 
          }

        </div>

      </section>

    </>
  );
};

export default TeamBusiness;
