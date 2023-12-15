import AdvanteIcons from "../AdvanteIcons"; 
import DevelopmentSetup from "./../../images/development-setup.png"
import TerminalHtml from "./../../images/terminal-html.png"
import TerminalJava from "./../../images/terminal-java.png"
import TerminalC from "./../../images/terminal-c.png"

import TagSymbol from "./../../images/tag-symbol.svg"
import KeySymbol from "./../../images/key-symbol.svg"

const Header = () => {
    return (
        <section className='development-header' >
           
            <div className="containerFull">
                <div className="development-header-wrapper">
                    <div className="development-header-copy">
                        <div className="development-header-icon">
                            <AdvanteIcons 
                                type="IcoSoftwareDevelopment" 
                                fill="var(--white-color)"
                            />
                        </div>
                        <h2><span className="text-violet-pink-blue-orange-red">Software Development</span>.</h2>
                        <p>We know that in this era you do not exist if you are not on the internet, that is why we help you creating pages and applications, designed for each special field, helping these pages to be difficult to forget and easy to interact with. We can also create software for each sector, we create from customer management to something more complex like payroll, even the implementation of messaging, payment options, UI/UX, AI, and whatever you need to make your business work in the best way.</p>
                    </div>
                    <div className="development-header-image">
                        <div className="development-setup-base">
                            <img 
                                src={ DevelopmentSetup }
                                alt="Software Development"
                            />
                            <div className="development-terminal-html">
                                <img 
                                    src={ TerminalHtml }
                                    alt="Terminal HTML"
                                />
                            </div>
                            <div className="development-terminal-java">
                                <img 
                                    src={ TerminalJava }
                                    alt="Terminal JAVA"
                                />
                            </div>
                            <div className="development-terminal-c">
                                <img 
                                    src={ TerminalC }
                                    alt="Terminal C++"
                                />
                            </div>
                            <div className="development-symbols tag-symbol">
                                <img 
                                    src={ TagSymbol }
                                    alt="Tag Symbol"
                                />
                            </div>
                            <div className="development-symbols key-symbol">
                                <img 
                                    src={ KeySymbol }
                                    alt="Key Symbol"
                                />
                            </div>
                            <ul className="development-works">
                                <li>def</li>
                                <li>array</li>
                                <li>string</li>
                                <li>printf</li>
                                <li>buffered</li>
                                <li>footer</li>
                            </ul>
                            <ul className="development-labeled-works">
                                <li>C#</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
  }
  
  export default Header;