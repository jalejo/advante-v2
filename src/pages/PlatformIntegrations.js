import '../components/PlatformIntegrations/platform-integrations.css'

import Header from "../components/PlatformIntegrations/Header"


import TransitionPage from '../utils/TransitionPage';
import ChooseIndustry from '../components/PlatformIntegrations/ChooseIndustry';
import Services from '../components/PlatformIntegrations/Services';
import Technologies from '../components/PlatformIntegrations/Technologies';

const PlatformIntegrations = () => {
  return (
    <>
      <Header />
      <Services />
      <Technologies />
      <ChooseIndustry />
    </>
  );
}

export default TransitionPage(PlatformIntegrations ); 