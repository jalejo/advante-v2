import '../components/CaseStudies/case-studies.css'
import Header from '../components/CaseStudies/Header';
import CaseStudiesList from '../components/CaseStudies/CaseStudiesList';
import Testimonials from '../components/Testimonials';

import TransitionPage from '../utils/TransitionPage';


const CaseStudies = () => {
    return (
        <>
            <Header />
            <CaseStudiesList />
            <Testimonials />
        </>
        
    );
  }
  
  export default TransitionPage( CaseStudies );