import '../components/ArtificialIntelligence/artificial-intelligence.css'
import ChooseIndustry from '../components/ArtificialIntelligence/ChooseIndustry';
import CustomSolutions from '../components/ArtificialIntelligence/CustomSolutions';
import Header from "../components/ArtificialIntelligence/Header"

import TransitionPage from '../utils/TransitionPage';

const ArtificialIntelligence = () => {
  return (
    <>
        <Header />
        <CustomSolutions />
        <ChooseIndustry />
    </>
  );
}

export default TransitionPage ( ArtificialIntelligence );