import logoFigma from "../../images/graphic-design-technologies/logo-figma-box.jpg"
import logoInVision from "../../images/graphic-design-technologies/logo-invision.png"
import logoExcalidraw from "../../images/graphic-design-technologies/logo-excalidraw-box.jpg"
import logoBalsamiq from "../../images/graphic-design-technologies/logo-balsamiq-box.jpg"
import logoEraserIo from "../../images/graphic-design-technologies/logo-eraserio-box.jpg"

const Tools = () => {
    return(
        <section className="software-tools">
            <div className="containerFull software-tools-wrapper">
                <div className="software-tool-headline"><h1>Tools.</h1></div>
                <div className="software-platforms-container">
                    <div className="software-platform-headline">
                        <p><span>These platforms are essential</span> tools in the professional software design and development process as they facilitate collaboration, streamline design, enable effective communication of ideas, and assist in validating concepts before implementation, ultimately leading to the creation of high-quality, user-satisfying software.</p>
                    </div>
                    
                    <div className="software-tool software-tool-figma">
                        <div className="software-tool-image">
                            <img 
                                src={ logoFigma }
                                alt="Figma Logo"
                            />
                            <h5>Figma</h5>
                        </div>
                        <div className="software-tool-copy">
                            <p>Is a cloud-based collaborative design tool that enables design teams to create, edit, and share user interface designs and prototypes collaboratively and in real-time.</p>
                        </div>
                    </div>

                    <div className="software-tool software-tool-invision">
                        <div className="software-tool-image">
                            <img 
                                src={ logoInVision }
                                alt="InVision Logo"
                            />
                            <h5>InVision</h5>
                        </div>
                        <div className="software-tool-copy">
                            <p>A prototyping platform that allows design teams to create, share, and collaborate on interactive prototypes of apps and websites.</p>
                        </div>
                    </div>

                    <div className="software-tool software-tool-excalidraw">
                        <div className="software-tool-image">
                            <img 
                                src={ logoExcalidraw }
                                alt="Excalidraw Logo"
                            />
                            <h5>Excalidraw</h5>
                        </div>
                        <div className="software-tool-copy">
                            <p>An online drawing application primarily used for collaboratively creating simple diagrams, sketches, and drawings.</p>
                        </div>
                    </div>

                    <div className="software-tool software-tool-balsamiq">
                        <div className="software-tool-image">
                            <img 
                                src={ logoBalsamiq }
                                alt="Balsamiq Logo"
                            />
                            <h5>Balsamiq</h5>
                        </div>
                        <div className="software-tool-copy">
                            <p>Is a design tool for creating sketches and prototypes of user interfaces for web and mobile applications.</p>
                        </div>
                    </div>

                    <div className="software-tool software-tool-eraserio">
                        <div className="software-tool-image">
                            <img 
                                src={ logoEraserIo }
                                alt="Eraser.io Logo"
                            />
                            <h5>Eraser.io</h5>
                        </div>
                        <div className="software-tool-copy">
                            <p>Is an online diagram and workflow design platform that helps teams collaboratively create and share flowcharts, mind maps, etc.</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
        
    )
}

export default Tools;