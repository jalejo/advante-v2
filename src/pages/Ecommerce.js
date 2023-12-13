import ChooseIndustry from '../components/Ecommerce/ChooseIndustry';
import '../components/Ecommerce/e-commerce.css'
import Header from "../components/Ecommerce/Header";
import OurIntegration from '../components/Ecommerce/OurIntegration';

import TransitionPage from '../utils/TransitionPage';

const Ecommerce = () => { 
    return(
        <>
            <Header />
            <OurIntegration />
            <ChooseIndustry />
            
        </>
    );
}

export default TransitionPage( Ecommerce );