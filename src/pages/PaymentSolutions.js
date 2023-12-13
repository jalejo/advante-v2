import '../components/PaymentSolutions/payment-solutions.css'
import ExpertiseServices from "../components/PaymentSolutions/ExpertiseServices";
import Header from "../components/PaymentSolutions/Header"
import TechnologyStack from "../components/PaymentSolutions/TechnologyStack";
import MarketsWeServe from "../components/PaymentSolutions/MarketsWeServe"

import TransitionPage from '../utils/TransitionPage';

const PaymentSolutions = () => {
  return (
    <>
      <Header />
      <TechnologyStack />
      <ExpertiseServices />
      <MarketsWeServe />
    </>
  );
}

export default TransitionPage(PaymentSolutions ); 