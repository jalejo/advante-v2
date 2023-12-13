import "../components/About/about.css"
import Header from "../components/About/Header";
import JoinForces from "../components/About/JoinForces";
import Locations from "../components/About/Locations";
import OurTeam from "../components/About/OurTeam";
import TeamBusiness from "../components/About/TeamBusiness";

import TransitionPage from '../utils/TransitionPage';

const About = () => {
    return (
      <>
          <Header />
          <OurTeam />
          <TeamBusiness />
          <Locations />
          <JoinForces />
      </>
    );
  }
  
  export default TransitionPage( About );