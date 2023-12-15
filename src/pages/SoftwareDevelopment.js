import '../components/SoftwareDevelopment/software-development.css'

import Header from "../components/SoftwareDevelopment/Header"

import TransitionPage from '../utils/TransitionPage';
import TechnologyStack from '../components/SoftwareDevelopment/TechnologyStack';
import ChooseService from '../components/SoftwareDevelopment/ChooseService';
import ChooseIndustry from '../components/SoftwareDevelopment/ChooseIndustry';

const SoftwareDevelopment = () => {
  return (
    <>
      <Header />
      <TechnologyStack />
      <ChooseService />
      <ChooseIndustry />
    </>
  );
}

export default TransitionPage (SoftwareDevelopment);