
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import './styles/layout.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PaymentSolutions from './pages/PaymentSolutions';

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
          <Route path="/ps" element={<PaymentSolutions />} />
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
