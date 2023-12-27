import logo from '../images/logo_advante.png'
import { Link, useLocation } from 'react-router-dom';

import navBarList from '../jsons/nav-bar.json'

//import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const location = useLocation();

  const isPageActive = (pageLink) => {
    return location.pathname === pageLink || location.pathname.startsWith(pageLink);
  };

  return (
    <header>
        <nav className='containerFull'>
            <Link to="/"  className='navBarLogo'><img src={logo} alt="Logo Advante" /></Link>
            <ul className='navBarList'>
              {
                navBarList.map( (item) => (
                  <li key={item.id} className={isPageActive(item.link) ? 'active' : ''}>
                    {item.children ? (
                      <>
                        <span>{item.page}</span>
                        <ul className='navBarList-child'>
                          {
                            item.children.map((children) => (
                              <li key={children.id} className={isPageActive(item.link + children.link) ? 'active' : ''}>
                                <Link to={item.link + children.link}>{children.page}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </>
                    ) : (
                      <Link to={item.link}>{item.page}</Link>
                    )}
                  </li>
                ))
              }

            </ul>
            
        </nav>
    </header>
  );
}

export default Navbar;