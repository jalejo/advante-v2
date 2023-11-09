import AdvanteIcons from "../AdvanteIcons"; 
import LetterA from "../../images/svg/design-A.svg"

const Header = () => {
    return (
        <section className='design-header' >
            <div className="bgr-dots"></div>
        
            <div className="design-header-wrapper">

                <div className="design-header-icon">
                    <AdvanteIcons 
                        type="IcoGraphicDesign" 
                        fill="var(--slate-gray)"
                    />
                </div>

                <div className="design-header-label">
                    <div className="letter-a">
                        <img 
                            src={ LetterA }
                            alt= "letter A"
                        />
                    </div>
                    <h2>Graphic & Design</h2>
                    <p>Beautifully design sites and apps</p>
                    <div className="circle-design-label"></div>
                </div>

                <div className="design-header-copy">
                    <p>Give a new point of view to your image, Let us help you give it a more dynamic, captivating and vibrant image so that everyone stops to see you. We facilitate communication so that everyone understands you, we create different types of infographics, images, reports, manuals and much more. We can even help you create your brand image if you wish, from logo, to packaging designs if you need it.</p>
                </div>
            

            </div>
                
           
        </section>
    );
  }
  
  export default Header;