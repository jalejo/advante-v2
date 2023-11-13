import AdvanteIcons from "../AdvanteIcons";
import DataCollectionImg from "../../images/market-analysis/data-collection-img.png"
import MarketSegmentation from "../../images/market-analysis/market-segmentation.png"
import IdentificationOpportunities from "../../images/market-analysis/identification-opportunities.png"
import Implementation from "../../images/market-analysis/implementation.png"
import ArrowStep1 from "../../images/market-analysis/arrow-step-1.svg"
import ArrowStep2 from "../../images/market-analysis/arrow-step-2.svg"
import ArrowStep3 from "../../images/market-analysis/arrow-step-3.svg"

const Header = () => {
  return (
    <section className="market-analysis-header">
      <div className="bgr-dots"></div>
      <div className="containerFull">
        <div className="market-analysis-label">
          <div className="market-analysis-icon">
            <AdvanteIcons type="IcoMarketAnalysis" fill="var(--white-color)" />
          </div>
          <h2>Market analysis</h2>
        </div>

        <div className="market-analysis-headline">
          <h1>Keeping <span>you</span> <br />up to date</h1>

          <div className="market-analysis-headline-copy">
            <p>A comprehensive market analysis is the compass that guides successful decision-making, revealing the intricate details of the market's heartbeat. At Advante Digital, we specialize in delivering a meticulous blend of qualitative and quantitative insights through our Market Analysis services.</p>
          </div>
        </div>

        <div className="image-steps">
          <div className="data-collection-img">
            <img 
              src={ DataCollectionImg }
              alt="Data Collection"
            />
            <div className="arrow-step-1">
              <img 
              src={ ArrowStep1 }
              alt="Step 1"
              />
            </div>
            <div className="market-segmentation-img">
              <img 
                src={ MarketSegmentation }
                alt="Market Segmentation"
              />
              <div className="arrow-step-2">
                <img 
                src={ ArrowStep2 }
                alt="Step 2"
                />
              </div>
              <div className="identification-opportunities-img">
                <img 
                  src={ IdentificationOpportunities }
                  alt="Market Segmentation"
                />
                <div className="arrow-step-3">
                  <img 
                  src={ ArrowStep3 }
                  alt="Step 3"
                  />
                </div>
                <div className="implementation-img">
                  <img 
                    src={ Implementation }
                    alt="Implementation"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Header;
