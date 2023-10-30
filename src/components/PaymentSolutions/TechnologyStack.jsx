import LogoWoo from '../../images/logo-technologies/logo-woo.png'
import LogoStripe from '../../images/logo-technologies/logo-stripe.png'
import LogoPaypal from '../../images/logo-technologies/logo-paypal.png'
import LogoFlutter from '../../images/logo-technologies/logo-flutter.png'
import LogoReact from '../../images/logo-technologies/logo-react.png'
import LogoShopify from '../../images/logo-technologies/logo-shopify.png'
import LogoQuickbooks from '../../images/logo-technologies/logo-quickbooks.png'

const TechnologyStack = () => {
    return (
        <section className="technology-stack">
            <div className="payment-noise"></div>
            <div className="technology-stack-wrapper">
                <h3>Technology <span className="text-violet-green">stack</span>.</h3>
                <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                
                <div className="technology-logo-list">
                    <div className="tech-logo-item"> <img src={LogoWoo} alt="WooCommerce" /> </div>
                    <div className="tech-logo-item"> <img src={LogoStripe} alt="Stripe" /> </div>
                    <div className="tech-logo-item"> <img src={LogoPaypal} alt="Paypal" /> </div>
                    <div className="tech-logo-item"> <img src={LogoFlutter} alt="Flutter" /> </div>
                    <div className="tech-logo-item"> <img src={LogoReact} alt="React" /> </div>
                    <div className="tech-logo-item"> <img src={LogoShopify} alt="Shopify" /> </div>
                    <div className="tech-logo-item"> <img src={LogoQuickbooks} alt="Quickbooks" /> </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default TechnologyStack;