import AdvanteIcons from "../AdvanteIcons";


const Header = () => {
  return (
    <section className="digital-marketing-header">
      <div className="bgr-noise"></div>
      <div className="containerFull">
        <div className="digital-marketing-label">
          <div className="digital-marketing-icon">
            <AdvanteIcons type="IcoDigitalMarketing" fill="var(--vivid-purple)" />
          </div>
          <h2>Digital Marketing.</h2>
        </div>

        <div className="digital-marketing-headline">
          <h1>We build <br />your brand <br /> irresistible and distinct.</h1>
        </div>




      </div>
    </section>
  );
};

export default Header;
