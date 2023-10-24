import { useState } from "react";
import "./styles.css"



const ExpertiseServices = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section className="expertise-services">
            <div className="cross-background"></div>
            <div className="containerFull expertise-services-wrapper">
                <h3><span className="text-violet-green">Expertise</span> & Services.</h3>

                <div className="expertise-services-grid">
                    <div className="expertise-services-list">
                        <div className="expertise-services-item">
                        <div className="expertise-services-text"><span>Facilitating Service Collection</span></div>
                            <div className="expertise-services-label"></div>
                        </div>
                        <div className="expertise-services-item">
                        <div className="expertise-services-text"><span>Payment Points</span></div>
                            <div className="expertise-services-label"></div>
                        </div>
                        <div className="expertise-services-item">
                        <div className="expertise-services-text"><span>Payments to Workers</span></div>
                            <div className="expertise-services-label"></div>
                        </div>
                        <div className="expertise-services-item">
                            <div className="expertise-services-text"><span>Enhancing the Customer Experience</span></div>
                            <div className="expertise-services-label"></div>
                        </div>
                    </div>
                    <div className="expertise-services-content">
                        <p>This service focuses on simplifying the process of collecting payments for businesses. It means that if you are a company offering products or services to your customers, "Payment Solutions" provides a solution that makes it easier for your customers to make payments. This can include the implementation of online payment systems, credit cards, bank transfers, or other convenient payment methods.</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
  }
  
  export default ExpertiseServices;