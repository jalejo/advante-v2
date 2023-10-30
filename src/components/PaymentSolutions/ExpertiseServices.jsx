import { useState } from "react";

import IcoMobileBill from "../../images/svg/IcoMobileBill";
import IcoCheckoutLocation from "../../images/svg/IcoCheckoutLocation";
import IcoCalendarDollar from "../../images/svg/IcoCalendarDollar";
import IcoBasketSmile from "../../images/svg/IcoBasketSmile";

const ExpertiseServices = () => {

    const [activeExpertise, setActiveExpertise] = useState(1);

    const handleExpertiseClick = (itemNumber) => {
        setActiveExpertise(itemNumber);
    };


    return (
        <section className="expertise-services">
            <div className="cross-background"></div>
            <div className="containerFull expertise-services-wrapper">
                <h3><span className="text-violet-green">Expertise</span> & Services.</h3>

                <div className="expertise-services-grid">
                    <div className={`expertise-services-item expertise-services-item-1 ${activeExpertise === 1 ? 'active' : ''}`} onClick={() => handleExpertiseClick(1)}>
                        <div className="expertise-services-text">
                            <IcoMobileBill /> <span>Facilitating Service Collection</span>
                        </div>
                        <div className="expertise-services-label"></div>
                    </div>
                    <div className="expertise-services-content expertise-services-content-1">
                        <p>This service focuses on simplifying the process of collecting payments for businesses. It means that if you are a company offering products or services to your customers, "Payment Solutions" provides a solution that makes it easier for your customers to make payments. This can include the implementation of online payment systems, credit cards, bank transfers, or other convenient payment methods.</p>
                    </div>
                    <div className={`expertise-services-item expertise-services-item-2 ${activeExpertise === 2 ? 'active' : ''}`} onClick={() => handleExpertiseClick(2)}>
                        <div className="expertise-services-text">
                            <IcoCheckoutLocation /> <span>Payment Points</span>
                        </div>
                        <div className="expertise-services-label"></div>
                    </div>
                    <div className="expertise-services-content expertise-services-content-2">
                        <p>This specialized service is dedicated to streamlining the payment collection process for businesses. In essence, if you're a company that provides goods or services to your customers, 'Payment Solutions' offers a comprehensive solution to facilitate and enhance the payment experience. This could involve the integration of cutting-edge online payment systems, credit card processing, secure bank transfers, or other user-friendly payment methods.</p>
                    </div>
                    <div className={`expertise-services-item expertise-services-item-3 ${activeExpertise === 3 ? 'active' : ''}`} onClick={() => handleExpertiseClick(3)}>
                        <div className="expertise-services-text"> 
                            <IcoCalendarDollar /> <span>Payments to Workers</span>
                        </div>
                        <div className="expertise-services-label"></div>
                    </div>
                    <div className="expertise-services-content expertise-services-content-3">
                        <p>Revolutionizing the way businesses collect payments, 'Payment Solutions' offers a tailored service designed to simplify the entire payment process. In simple terms, if your company offers products or services, this solution is all about making the payment journey effortless for your customers. This might involve implementing advanced online payment systems, credit card processing, reliable bank transfers, or other convenient payment methods.</p>
                    </div>
                    <div className={`expertise-services-item expertise-services-item-4 ${activeExpertise === 4 ? 'active' : ''}`} onClick={() => handleExpertiseClick(4)}>
                        <div className="expertise-services-text"> 
                            <IcoBasketSmile /><span>Enhancing the Customer Experience</span>
                        </div>
                        <div className="expertise-services-label"></div>
                    </div>
                    <div className="expertise-services-content expertise-services-content-4">
                        <p>At the forefront of payment collection innovation, 'Payment Solutions' is a service committed to redefining the way businesses gather payments. Put plainly, if you're a company that offers goods or services, this solution is all about revolutionizing the payment experience for your customers. This could entail the integration of cutting-edge online payment systems, seamless credit card processing, secure bank transfers, or other hassle-free payment methods.</p>
                    </div>
              
                </div>
                
            </div>
        </section>
    );
  }
  
  export default ExpertiseServices;