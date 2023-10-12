
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import './styles/layout.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PaymentSolutions from './pages/PaymentSolutions';
// import ArtificialIntelligence from './pages/ArtificialIntelligence'; 
// import GraphicDesign from './pages/GraphicDesign';
import Footer from './components/Footer'

const App = () => {
  return (
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
  );
}; 

export default App; 
