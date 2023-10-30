import DesignLawsList from '../../jsons/design-laws.json'

const lawImages = require.context('../../images', true );

const OurDesignLaws = () => {
    return (
        <section className='design-laws' >
            <div className="containerFull design-laws-wrapper">
                <div className="design-laws-headline"> 
                    <div className="design-laws-title">
                        <h1>Our
                            <span className="text-orange-pink-violet-blue">Design</span> 
                            Law.
                        </h1>
                    </div>
                    <div className="design-laws-copy">
                        <p>
                        At Advante Digital, we understand that every website is a unique digital masterpiece that must seamlessly blend functionality and aesthetics to captivate its audience. Our meticulous and creative approach to web design ensures that each project is an authentic expression of our clients' vision. Here's an overview of our step-by-step process:
                        </p>
                    </div>
                </div>

                <div className="design-laws-grid">
                    {
                        DesignLawsList.map((law) => (
                            <div key={law.id} className='design-law-item'>
                                <div className='design-law-ico'>
                                    <img 
                                        src={lawImages(`./${law.ico}`)}
                                        alt={ law.title }
                                    />
                                </div>
                                <div className='design-law-item-headline'>
                                    <span>{ law.id }</span>
                                    <h6>{ law.title }</h6>
                                </div>
                                <div className='design-law-item-copy'>
                                    <p>{ law.copy }</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
  }
  
  export default OurDesignLaws;