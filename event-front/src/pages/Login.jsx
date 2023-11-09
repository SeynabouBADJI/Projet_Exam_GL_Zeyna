import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Home.css';


function Login() {
    return(
        <>
            <div id="Home"> 
                <h1>Page de connexion</h1>
                <Footer/>
            </div>
            <Outlet/>
        </>
    )
}
export default Login;