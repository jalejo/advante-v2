import '../components/MarketAnalysis/market-analysis.css'
import Header from "../components/MarketAnalysis/Header";
import Services from '../components/MarketAnalysis/Services';
import EmpoweringSolution from '../components/MarketAnalysis/EmpoweringSolution';
import ChooseIndustry from '../components/MarketAnalysis/ChooseIndustry';

const MarketAnalysis = () => { 
    return(
        <>
            <Header />
            <Services />
            <EmpoweringSolution />
            <ChooseIndustry />
        </>
    );
}

export default MarketAnalysis;