import '../styles/Navbar.css';

function Navbar() {

    return(
    <header id="navbar">
        <div id="navbar-content">
            <nav id="nav-item">
                <h1 id="logo">
                    Logo
                </h1>
                <div id="links">
                    <ul>
                        <li><a href="#" className="active">Accueil</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Galleries</a></li>
                        <li><a href="#">Devis</a></li>
                    </ul>
                </div>
            </nav>
            <div id="connect-buttons">
                <a href="#" id="login">Se connecter</a>
                <a href="#" id="signup">S'inscrire</a>
            </div>
        </div>
    </header>
    )
    
}

export default Navbar;