import '../components/GraphicDesign/graphic-design.css'
import Header from "../components/GraphicDesign/Header";
import OurDesignLaws from "../components/GraphicDesign/OurDesignLaws"
import Services from '../components/GraphicDesign/Services';
import IndustriesWeWork from '../components/GraphicDesign/IndustriesWeWork';

const GraphicDesign = () => {
  return (
    <>
        <Header />
        <Services />
        <OurDesignLaws />
        <IndustriesWeWork />
    </>
  );
}

export default GraphicDesign;