import logo from '../images/logo_advante.png'
import { Link } from 'react-router-dom';

//import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <header>
        <nav className='containerFull'>
            <Link to="/"  className='navBarLogo'><img src={logo} alt="Logo Advante" /></Link>
            <ul className='navBarList'>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/payment-solutions">Services</Link></li>
                <li><Link to="/services">Cases Studies</Link></li>
                <li><Link to="/contact">Blog</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>
            
        </nav>
    </header>
  );
}

export default Navbar;