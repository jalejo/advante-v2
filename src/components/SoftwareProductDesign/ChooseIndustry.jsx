import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';

import MainCase from "../MainCase";

import CasesList from '../../jsons/cases.json';
import IndustryList from '../../jsons/industry.json'
import SolutionsList from '../../jsons/solutions.json'

import MarketArrow from '../../images/MarketArrow';
import Solutions from './Solutions';

const industryImages = require.context('../../images/industry', true );
const industryWithImageSoftware = IndustryList.filter(item => item.hasOwnProperty("image-software"));


const ChooseIndustry = () => {

    const [selectedIndustryId, setSelectedIndustryId] = useState(1);
    const selectedCase = CasesList[4];

    const [swiper, setSwiper] = useState(null)


    const filteredData = SolutionsList.filter(item => item.industry.includes(selectedIndustryId) && item.services.includes(1));
    
    const handleChange = (event, newValue) => {
        setSelectedIndustryId(newValue);
        swiper.slideTo( newValue - 1 );
    };


    const nextTo = () => {
        swiper.slideNext();
    };
    const prevTo = () => {
        swiper.slidePrev();
    };
  
  return (
    <section className="software-industry">
  
        <div className="software-industry-wrapper containerFull">
       
        <h3><span>Select</span> the industry.</h3>
        
        <div className='software-listNavigator'>
            <div className='software-list-arrow software-list-backward' onClick={ prevTo } ><MarketArrow /></div>
            <div className='software-list-arrow software-list-forward' onClick={ nextTo } ><MarketArrow /></div>
        </div>
        

        <div className="software-industries-list">
                <Swiper

                slidesPerView={ 'auto' }
           
                spaceBetween= {20}
                slideToClickedSlide={true}
                onSwiper={(s) => {
                    console.log("initialize swiper", s);
                    setSwiper(s);
                }}

                breakpoints={{
                    900: {
                    slidesPerView: 'auto',
                    spaceBetween: 36,
                    },
                    1200: {
                    slidesPerView: 'auto',
                    spaceBetween: 56,
                    }
                }}
                >
                    {
                        industryWithImageSoftware.map( ( industry ) => (
                            <SwiperSlide 
                                key={ industry.id } 
                                onClick={( event ) => handleChange( event, industry.id )} 
                                className={`${industry.id === selectedIndustryId ? 'active' : ''}`}
                            >
                                <h5 dangerouslySetInnerHTML={{ __html: industry.name }} />

                                <div className='industry-selector'>
                                    <img 
                                        src={industryImages(`./${industry["image-software"]}`)}
                                        alt={ industry.name }
                                    />
                                    
                                </div>
                                <div className='industry-overlay'>

                                </div>
                            </SwiperSlide>
                        ) )
                    }
                </Swiper>
              
            </div>
        </div>
        <Solutions 
            solutionList = { filteredData }
        />

        <MainCase 
            selectedCase={selectedCase} 
            industryName = "Relevant"
            className = "software-design"
            //backgroundColor = "var(--white-color)"
        />
    </section>
  );
};

export default ChooseIndustry;