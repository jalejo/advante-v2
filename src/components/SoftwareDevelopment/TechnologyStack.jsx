import LogoJS from '../../images/logo-technologies/logo-js.png'
import LogoHTML from '../../images/logo-technologies/logo-html.png'
import LogoCSS from '../../images/logo-technologies/logo-css.png'

import LogoPHP from '../../images/logo-technologies/logo-php.png'
import LogoJAVA from '../../images/logo-technologies/logo-java.png'
import LogoSwift from '../../images/logo-technologies/logo-swift.png'
import LogoKotlin from '../../images/logo-technologies/logo-kotlin.png'

const TechnologyStack = () =>{
    return(
        <section className="development-technology">
            <div className="containerFull">
                <h3>Technology stack.</h3>

                <div className="development-stack development-stack-front">
                    <h4>Front-End</h4>
                    <p>Our development team has years of experience developing custom web application for clients in multiple States. We are proficient with JavaScript animations done together with beautiful CSS and HTML pages.</p>
                    <div className="technology-logo-list">
                        <div className="tech-logo-item"> <img src={LogoJS} alt="WooCommerce" /> </div>
                        <div className="tech-logo-item"> <img src={LogoHTML} alt="Stripe" /> </div>
                        <div className="tech-logo-item"> <img src={LogoCSS} alt="Paypal" /> </div>
                    </div>
                </div>

                <div className="development-stack development-stack-back">
                    <h4>Back-End</h4>
                    <p>Our development team has years of experience developing custom web application for clients in multiple States. We are proficient with JavaScript animations done together with beautiful CSS and HTML pages.</p>
                    <div className="technology-logo-list">
                        <div className="tech-logo-item"> <img src={ LogoPHP } alt="WooCommerce" /> </div>
                        <div className="tech-logo-item"> <img src={ LogoJAVA } alt="Stripe" /> </div>
                        <div className="tech-logo-item"> <img src={ LogoSwift } alt="Paypal" /> </div>
                        <div className="tech-logo-item"> <img src={ LogoKotlin } alt="Paypal" /> </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TechnologyStack


