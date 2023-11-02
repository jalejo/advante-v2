import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css'
import './styles/layout.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PaymentSolutions from './pages/PaymentSolutions';
import GraphicDesign from './pages/GraphicDesign';
import ArtificialIntelligence from './pages/ArtificialIntelligence';

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
          <Route path="/ai" element={<ArtificialIntelligence />} />

          {/* <Route path='/' element={<Home />} />
          <Route path="/ai" element={<ArtificialIntelligence />} />
          <Route path="/graphic-design" element={<GraphicDesign />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider> 
  );
}; 

export default App; 
