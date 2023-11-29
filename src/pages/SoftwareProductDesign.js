import '../components/SoftwareProductDesign/software-design.css'
import Header from "../components/SoftwareProductDesign/Header";
import Services from '../components/SoftwareProductDesign/Services';
import Tools from '../components/SoftwareProductDesign/Tools';
import ChooseIndustry from '../components/SoftwareProductDesign/ChooseIndustry';



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

export default SoftwareProductDesign;