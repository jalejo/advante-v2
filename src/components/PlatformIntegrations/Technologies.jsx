import LogoZoom from '../../images/logo-technologies/logo-zoom.png'
import LogoMailgun from '../../images/logo-technologies/logo-mailgun.png'
import LogoStripe from '../../images/logo-technologies/logo-stripe.png'
import LogoMailchimp from '../../images/logo-technologies/logo-mailchimp.png'
import LogoTwilio from '../../images/logo-technologies/logo-twilio.png'
import LogoMap from '../../images/logo-technologies/logo-maps.png'
import LogoKlaviyo from '../../images/logo-technologies/logo-klaviyo.png'


const Technologies = () => {
    return (
        <section className="technology-platform">
        
            <div className="technology-platform-wrapper">
                <h3>Technologies.</h3>
                <p>Embark on a journey through the cutting-edge technologies and platforms underpinning our services</p>
                
                <div className="technology-platform-logo-list">
                    <div className="tech-logo-item"> <img src={LogoZoom} alt="WooCommerce" /> </div>
                    <div className="tech-logo-item"> <img src={LogoMailgun} alt="Logo Mailgun" /> </div>
                    <div className="tech-logo-item"> <img src={LogoStripe} alt="Logo Stripe" /> </div>
                    <div className="tech-logo-item"> <img src={LogoMailchimp} alt="Logo Mailchimp" /> </div>
                    <div className="tech-logo-item"> <img src={LogoTwilio} alt="Logo Twilio" /> </div>
                    <div className="tech-logo-item"> <img src={LogoMap} alt="Logo Map" /> </div>
                    <div className="tech-logo-item"> <img src={LogoKlaviyo} alt="Logo Klaviyo" /> </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Technologies;