import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import EmpoweringList from "../../jsons/market-analysis-empowering.json";

const empoweringImage = require.context('../../images/market-analysis', true );

const EmpoweringSolution = () => {


  return (
    <section className="empowering-solution">

      <div className="containerFull">

        <h3>Empowering <span>Solution.</span></h3>



        <div className="empowering-list">

            {EmpoweringList.map((empower) => (
                <div className="empower-item-box" key={empower.id}>
                    <div className="empower-item-texts">
                        <div className="empower-item-number"> { empower.id }. </div>
                        <h5>{ empower.title }</h5>
                        <div className="empower-item-copy" dangerouslySetInnerHTML={{ __html: empower.content }} />
                    </div>
                    <div className="empower-item-image"> 
                        <img 
                            src={empoweringImage(`./${empower.image}`)}
                            alt={ empower.title }
                        />
                    </div>
                </div>
            ))}


{/*           <Swiper
            direction={'vertical'}
            mousewheel={true}
            pagination={{
                clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
          >
            {EmpoweringList.map((serv) => (
              <SwiperSlide key={serv.id}>
                <div
                  className="market-service-box"
                  style={{ backgroundColor: serv.ico_color + "66" }}
                ></div>
                <h5 dangerouslySetInnerHTML={{ __html: serv.title }} />
                <p>{serv.content}</p>
              </SwiperSlide>
            ))}
          </Swiper> */}



        </div>
      </div>
    </section>
  );
};

export default EmpoweringSolution;
