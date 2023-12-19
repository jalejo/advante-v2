import ContactUs from '../components/ContactUs';
import TransitionPage from '../utils/TransitionPage';

const Contact = () => {
    return (
      
        <ContactUs 
            headLineText = "In need of a product? Let's construct one of the" 
            headLineSpan = "highest quality"
            spanClass = "text-violet-pink-red-orange"
            sendColor = "var(--gradient-blue-violet)"
            checkColor = "var(--light-purple)"
            bgCircles = {[
                {
                  color:"var(--orchid-pink)",
                  size:"32.5rem",
                  top:"-10%",
                  right:"10%",
                  opacity:"0.15"
                },
                {
                  color:"var(--vivid-purple)",
                  size:"32.5rem",
                  top:"-10%",
                  left:"-10%",
                  right:"auto",
                  opacity:"0.15"
                },
                {
                  color:"var(--tangerine-orange)",
                  size:"32.5rem",
                  bottom:"-20%",
                  right:"40%",
                  opacity:"0.15"
                }
            ]}
        />

    );
  }
  
  export default TransitionPage( Contact );