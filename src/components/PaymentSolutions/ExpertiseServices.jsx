
import { useState } from "react";
import "./styles.css"



const ExpertiseServices = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section className="expertise-services">
            <div className="cross-background"></div>
            <div className="containerFull expertise-services-wrapper">
                <h3><span className="text-violet-green">Expertise</span> & Services.</h3>
                <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                
                
            </div>
        </section>
    );
  }
  
  export default ExpertiseServices;