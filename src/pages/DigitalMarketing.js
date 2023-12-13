import '../components/DigitalMarketing/digital-marketing.css'
import Header from "../components/DigitalMarketing/Header";
import ChooseService from '../components/DigitalMarketing/ChooseService';
import DigitalTools from '../components/DigitalMarketing/DigitalTools';
import ChooseIndustry from '../components/DigitalMarketing/ChooseIndustry';
import TransitionPage from '../utils/TransitionPage';

const DigitalMarketing = () => { 
    return(
        <>
            <Header />
            <ChooseService />
            <DigitalTools />
            <ChooseIndustry />
        </>
    );
}

export default TransitionPage ( DigitalMarketing );