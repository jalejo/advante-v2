import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css'
import './styles/layout.css'
import Navbar from './components/Navbar'

import AnimatedRoutes from './components/AnimatedRoutes';

import Footer from './components/Footer'

import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/Theme'; 


const App = () => {


  return (
    <ThemeProvider theme={theme}>
      
      <Router>
        <Navbar />
        <div className='main-wrapper'>
          <AnimatedRoutes />
        </div>
        <Footer />
      </Router>
    </ThemeProvider> 
  );
}; 

export default App; 
