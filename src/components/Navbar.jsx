import logo from '../images/logo_advante.png'
//import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <header>
        <nav className='containerFull'>
            <a  className='navBarLogo'><img src={logo} alt="Logo Advante" /></a>
            <ul className='navBarList'>
                <li><a href="/">About us</a></li>
                <li><a href="/about">Services</a></li>
                <li><a href="/services">Cases Studies</a></li>
                <li><a href="/contact">Blog</a></li>
                <li><a href="/contact">Contact us</a></li>
            </ul>
            
        </nav>
    </header>
  );
}

export default Navbar;