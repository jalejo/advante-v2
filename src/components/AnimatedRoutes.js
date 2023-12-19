import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './../pages/Home'
import About from './../pages/About';
import PaymentSolutions from './../pages/PaymentSolutions';
import GraphicDesign from './../pages/GraphicDesign';
import ArtificialIntelligence from './../pages/ArtificialIntelligence';
import MarketAnalysis from './../pages/MarketAnalysis';
import Ecommerce from './../pages/Ecommerce';
import DigitalMarketing from './../pages/DigitalMarketing';
import SoftwareProductDesign from './../pages/SoftwareProductDesign';
import SoftwareDevelopment from './../pages/SoftwareDevelopment';
import Contact from './../pages/Contact'

import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {

    const location = useLocation();

    return(
        <AnimatePresence 
            mode='wait'
            initial={ false }
          
            onExitComplete={() => {
                if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "instant" });
                }
            }}
        >
            <Routes location={ location } key={ location.pathname } > 
                <Route index element={<Home />} />
                <Route path='/about' element={ <About /> } />
                <Route path="/software-product-design" element={<SoftwareProductDesign />} />
                <Route path="/payment-solutions" element={<PaymentSolutions />} />
                <Route path="/graphic-design" element={<GraphicDesign />} />
                <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
                <Route path="/market-analysis" element={<MarketAnalysis />} />
                <Route path="/e-commerce" element={<Ecommerce />} />
                <Route path="/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/software-development" element={<SoftwareDevelopment />} />
                <Route path="/contact-us" element={ <Contact /> } />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes