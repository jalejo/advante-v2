import CustomSolutionsList from '../../jsons/ai-solutions.json';
import CustomSolutionGrid from './CustomSolutionGrid';


const CustomSolutions = () => {
    return (
        <section className='ai-custom-solutions' >
          
            <div className="bgr-noise"></div>

            <div className="ai-custom-wrapper">

                    <h3><span className="text-pink-blue-violet">Custom</span> Solutions.</h3>

                    {
                        CustomSolutionsList.map( (custom) => (
                            <CustomSolutionGrid 
                                key={ custom.id }
                                allData = { custom } 
                            />
                        ) )
                    }

            </div>
                
           
        </section>
    );
  }
  
  export default CustomSolutions;