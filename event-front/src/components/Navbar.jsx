import { NavLink, Outlet, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
    const location = useLocation();

    const isLinkActive = (pathname) => {
    return location.pathname === pathname ? 'active' : '';
    };

    return(
    <header id="navbar">
        <div id="navbar-content">
            <nav id="nav-item">
                <h1 id="logo">
                    Logo
                </h1>
                <div id="links">
                    <ul>
                        <li>
                            <NavLink to='/'>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Services'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Galleries'>Galleries</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Devis'>Devis</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="connect-buttons">
                <NavLink to='../pages/Login'>Se Connecter</NavLink>
                <NavLink to='../pages/Signup'>S'inscrire</NavLink>
            </div>
        </div>
        <Outlet />
    </header>
    )
    
}

export default Navbar;