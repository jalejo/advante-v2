import AdvanteIcons from "../AdvanteIcons"; 


const Header = () => {
    return (
        <section className='platform-header' >
        
            <div className="containerFull">
                <div className="platform-header-wrapper">
                    <div className="platform-header-copy">
                        <div className="platform-header-icon">
                            <AdvanteIcons 
                                type="IcoPlatformIntegrations" 
                                fill="var(--heart-purple)"
                            />
                        </div>
                        <h2>Platform Integrations.</h2>
                        <p>We are leaders in the convergence of innovation and business efficiency. We specialize in business integration with artificial intelligence tools and in the development of customized solutions. At Advante Digital, our vision is to drive operational efficiency, reduce costs and increase the competitiveness of companies in the digital era.</p>
                    </div>
              
                </div>
                
            </div>
        </section>
    );
  }
  
  export default Header;