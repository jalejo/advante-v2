import { motion, transform } from "framer-motion";

const TransitionPage = ( OgComponent ) => {
    return () => (
        <>
            
            <motion.div 
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: .5, ease:[0.22, 1, 0.36, 1] }}
            />
            <OgComponent />
            <motion.div 
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: .5, ease:[0.22, 1, 0.36, 1] }}
            />
        </>
    )
}

export default TransitionPage;