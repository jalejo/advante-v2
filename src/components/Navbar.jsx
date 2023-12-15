import logo from '../images/logo_advante.png'
import { Link } from 'react-router-dom';

//import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <header>
        <nav className='containerFull'>
            <Link to="/"  className='navBarLogo'><img src={logo} alt="Logo Advante" /></Link>
            <ul className='navBarList'>
                <li><Link to="/about">About us</Link></li>
                <li>
                  <span>Services</span>
                  <ul className='navBarList-child'>
                    <li><Link to="/software-development">Software Development</Link></li>
                    <li><Link to="/e-commerce">E-commerce</Link></li>
                    <li><Link to="/platform-integrations">Platform Integrations</Link></li>
                    <li><Link to="/payment-solutions">Payments Solutions</Link></li>
                    <li><Link to="/artificial-intelligence">Artificial Intelligence</Link></li>
                    <li><Link to="/software-product-design">Software Product design</Link></li>
                    <li><Link to="/graphic-design">Graphic Design</Link></li>
                    <li><Link to="/market-analysis">Market Analysis</Link></li>
                    <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                  </ul>
                </li>
                <li><Link to="/">Case Studies</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Contact us</Link></li>
            </ul>
            
        </nav>
    </header>
  );
}

export default Navbar;