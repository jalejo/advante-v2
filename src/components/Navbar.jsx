import logo from '../images/logo_advante.png'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import menuBar from '../images/menu-advante.svg'
import closeMenu from '../images/close.svg'

import navBarList from '../jsons/nav-bar.json'

//import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isPageActive = (pageLink) => {
    return location.pathname === pageLink || location.pathname.startsWith(pageLink);
  };

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className='nav-menu'>
        <nav className='containerFull'>
            <Link to="/"  className='navBarLogo'><img src={logo} alt="Logo Advante" /></Link>
            <ul className={`navBarList ${menuOpen ? 'open' : ''}`}>
              {
                navBarList.map( (item) => (
                  <li key={item.id} className={isPageActive(item.link) ? 'active' : ''}>
                    {item.children ? (
                      <>
                        <span>{item.page} </span>
                        <ul className='navBarList-child'>
                          {
                            item.children.map((children) => (
                              <li key={children.id} className={isPageActive(item.link + children.link) ? 'active' : ''}>
                                <Link to={item.link + children.link} onClick={ openMenu } >{children.page}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </>
                    ) : (
                      <Link to={item.link} onClick={ openMenu } >{item.page}</Link>
                    )}
                  </li>
                ))
              }

            </ul>
            <div className='menu-bar-wrapper'>
              <img 
                src={ menuOpen ? closeMenu : menuBar }
                alt='menu'
                onClick={ () => { openMenu() } }
              />
            </div>
        </nav>
    </header>
  );
}

export default Navbar;