import AdvanteIcons from "../AdvanteIcons";


const Header = () => {
  return (
    <section className="e-commerce-header">
     
      <div className="containerFull">
        <div className="e-commerce-label">
          <div className="e-commerce-icon">
            <AdvanteIcons type="IcoEcommerce" fill="var(--white-color)" />
          </div>
          <h2>E-commerce.</h2>
        </div>

        <div className="e-commerce-headline">
          <h1>Highly <br />experienced</h1>

          <div className="e-commerce-headline-copy">
            <p>We design a space for you to make yourself known to people, show your products or your services, in the most creative way and that characterizes you, We also help you to have a direct communication with customers, have control of inventories, facilitate payment methods, schedule management, among other utilities that can help you in your online business.</p>
          </div>
        </div>




      </div>
    </section>
  );
};

export default Header;
