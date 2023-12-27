import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About';
import PaymentSolutions from '../pages/PaymentSolutions';
import GraphicDesign from '../pages/GraphicDesign';
import ArtificialIntelligence from '../pages/ArtificialIntelligence';
import MarketAnalysis from '../pages/MarketAnalysis';
import Ecommerce from '../pages/Ecommerce';
import DigitalMarketing from '../pages/DigitalMarketing';
import SoftwareProductDesign from '../pages/SoftwareProductDesign';
import SoftwareDevelopment from '../pages/SoftwareDevelopment';
import Contact from '../pages/Contact'
import CaseStudies from '../pages/CaseStudies';
import Articles from '../pages/Articles';
import ArticleTemplate from '../components/Articles/ArticleTemplate';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = ( ) => {

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
                <Route path="/services/software-product-design" element={<SoftwareProductDesign />} />
                <Route path="/services/payment-solutions" element={<PaymentSolutions />} />
                <Route path="/services/graphic-design" element={<GraphicDesign />} />
                <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
                <Route path="/services/market-analysis" element={<MarketAnalysis />} />
                <Route path="/services/e-commerce" element={<Ecommerce />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/services/software-development" element={<SoftwareDevelopment />} />
                <Route path="/contact-us" element={ <Contact /> } />
                <Route path="/case-studies" element={ <CaseStudies /> } />
                <Route path="/articles" element={ <Articles /> } />
                <Route path='/articles/:slug' element={<ArticleTemplate />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes