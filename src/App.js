import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css'
import './styles/layout.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PaymentSolutions from './pages/PaymentSolutions';
import GraphicDesign from './pages/GraphicDesign';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import MarketAnalysis from './pages/MarketAnalysis';
import Ecommerce from './pages/Ecommerce';
import DigitalMarketing from './pages/DigitalMarketing';
import SoftwareProductDesign from './pages/SoftwareProductDesign';

import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/Theme'; 
// import ArtificialIntelligence from './pages/ArtificialIntelligence'; 
// import GraphicDesign from './pages/GraphicDesign';
import Footer from './components/Footer'




const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path="/payment-solutions" element={<PaymentSolutions />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/e-commerce" element={<Ecommerce />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/software-product-design" element={<SoftwareProductDesign />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider> 
  );
}; 

export default App; 
