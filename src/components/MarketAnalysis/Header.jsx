import AdvanteIcons from "../AdvanteIcons"; 

const Header = () => {
    return (
        <section className='design-header' >
            <div className="bgr-dots"></div>
        
            <div className="design-header-wrapper">

                <div className="market-analysis-icon">
                    <AdvanteIcons 
                        type="IcoMarketAnalysis" 
                        fill="var(--white-color)"
                    />
                </div>

                <h2>Market analysis</h2>
            </div>
                
           
        </section>
    );
  }
  
  export default Header;