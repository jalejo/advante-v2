import TechLogosList from '../../jsons/tech-logos.json'

const logoImages = require.context('../../images/logo-tech', true );


const OurIntegration = () => {
    

    const filteredData = TechLogosList.filter(item => item.services.includes(2));


    return(
        <section className="our-integration">
            <div className="our-integration-wrapper containerFull">
                <div className='our-integration-text'>
                    <h3>Our <span className='text-red-blue-orange-pink double-underline'>integrations</span>.</h3>
                    <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>


                <div className="our-integration-list">
                    {
                        filteredData.map((logo) => (
                            <div key={logo.id} className='our-integration-logo-item'>  
                                <img 
                                    src={logoImages(`./${ logo.file }`)}
                                    alt={ logo.name }
                                />
                                <div className='logo-glow'>
                                    <img 
                                        src={logoImages(`./${ logo.file }`)}
                                        alt={ logo.name }
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurIntegration;