import AdvanteIcons from "../AdvanteIcons";
import LayoutSoftware from "../../images/software-layout.jpg"

const Header = () => {
  return (
    <section className="software-design-header">
      <div className="software-layout containerFull">
        <div className="software-layout-container">
          <img 
            src={ LayoutSoftware }
            alt="Layout Software"
          />
        </div>
      </div>
      <div className="containerFull">
        <div className="software-design-label">
          <div className="software-design-icon">
            <AdvanteIcons type="IcoSoftwareProductDesign" fill="var(--soft-beige)" />
          </div>
          <h2>Software Product Design</h2>
        </div>

        <div className="software-design-headline">
          <h1>Turning Ideas into <br /><span className="h1-thin">Innovation</span>, <span className="h1-box">and</span> <span className="h1-vision">Vision</span> <br />into <span className="h1-thin">Digital Reality</span>.</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
