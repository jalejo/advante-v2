import AdvanteIcons from "../AdvanteIcons"; 
import roboHandsHeader from "../../images/ia-robohands-header.png"

const Header = () => {
    return (
        <section className='ai-header' >
          
            <div className="payment-noise"></div>

            <div className="blur-circle circle-ai circle-pink circle-ai-pink-1"></div>
            <div className="blur-circle circle-ai circle-violet circle-ai-violet-1"></div>
            <div className="blur-circle circle-ai circle-pink circle-ai-pink-2"></div>
            <div className="blur-circle circle-ai circle-violet circle-ai-violet-2"></div>
            <div className="blur-circle circle-ai circle-violet circle-ai-violet-3"></div>

            <div className="ai-header-wrapper">

                <div className="ai-header-icon">
                    <AdvanteIcons 
                        type="IcoArtificialIntelligence" 
                        fill="var(--orchid-pink)"
                    />
                </div>

                <div className="ai-header-box">
                    <h2>Artificial <span className="text-pink-blue-violet">Intelligence</span>.</h2>

                    <div className="ai-header-copy">
                        <p>If you have several digital tasks to perform, you find them boring or very repetitive, you may need an assistant, and what better than an artificial intelligence, it can help you with those boring tasks, analyze several documents in a short time, ask for help in some decisions, in addition, this artificial intelligence is completely customized for your business, regardless of the sector you are in.</p>
                    </div>
                </div>

                <div className="robohand-header">
                    <img src={ roboHandsHeader } alt="Robot Hand" />
                </div>
            
            </div>
                
           
        </section>
    );
  }
  
  export default Header;