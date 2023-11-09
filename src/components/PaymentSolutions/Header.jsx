import AdvanteIcons from "../AdvanteIcons"; 
import CreditCardBase from "./../../images/credit-card-base.png"
import CreditCardEffect from "./../../images/credit-card-effect.png"

import PaymentCone from "./../../images/payment-cone.png"
import PaymentCube from "./../../images/payment-cube.png"
import PaymentDonut from "./../../images/payment-donut.png"

const Header = () => {
    return (
        <section className='payment-header' >
            <div className="bgr-noise"></div>
            <div className="containerFull">
                <div className="payment-header-wrapper">
                    <div className="payment-header-copy">
                        <div className="payment-header-icon">
                            <AdvanteIcons 
                                type="IcoPaymentsSolutions" 
                                fill="var(--heart-purple)"
                            />
                        </div>
                        <h2>Payment Solutions.</h2>
                        <p>We believe that the ease of payment is one of the important issues for customers to look for you, and stay with you, so we want to help you with a payment point to facilitate the collection of your services, plus you can also make payments to your workers without any problem.</p>
                    </div>
                    <div className="payment-header-image">
                        <div className="payment-cc-base">
                            <img 
                                src={ CreditCardBase }
                                alt="Credit Card"
                            />
                            <div className="payment-cc-layer-effect"></div>
                            <div className="payment-cc-effect">
                                <img 
                                    src={ CreditCardEffect }
                                    alt="Credit Card Clone"
                                />
                            </div>
                            <div className="payments-figures payment-cone">
                                <img 
                                    src = { PaymentCone }
                                    alt = "Figure Cone"
                                />
                            </div>
                            <div className="payments-figures payment-cube">
                                <img 
                                    src = { PaymentCube }
                                    alt = "Figure Cube"
                                />
                            </div>
                            <div className="payments-figures payment-donut">
                                <img 
                                    src = { PaymentDonut }
                                    alt = "Figure Donut"
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
  }
  
  export default Header;