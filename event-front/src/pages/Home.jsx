//import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Caroussel from '../components/Caroussel';
import Footer from '../components/Footer';
import '../styles/Home.css';

function Home() {
    
    return(
        <>
        <div id='Home'>
            <Caroussel/>
            <Footer/>
        </div>
        <Outlet/>
        </>
    )
}

export default Home;