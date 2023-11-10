import AdvanteIcons from "../AdvanteIcons";

const Header = () => {
  return (
    <section className="market-analysis-header">
      <div className="bgr-dots"></div>
      <div className="containerFull">
        <div className="market-analysis-label">
          <div className="market-analysis-icon">
            <AdvanteIcons type="IcoMarketAnalysis" fill="var(--white-color)" />
          </div>
          <h2>Market analysis</h2>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Header;
