import '../components/SoftwareProductDesign/software-design.css'
import Header from "../components/SoftwareProductDesign/Header";
import Services from '../components/SoftwareProductDesign/Services';
import Tools from '../components/SoftwareProductDesign/Tools';
import ChooseIndustry from '../components/SoftwareProductDesign/ChooseIndustry';

import TransitionPage from '../utils/TransitionPage';

const SoftwareProductDesign = () => { 
    return(
        <>
            <Header />
            <Services />
            <Tools />
            <ChooseIndustry />
        </>
    );
}

export default TransitionPage (SoftwareProductDesign);