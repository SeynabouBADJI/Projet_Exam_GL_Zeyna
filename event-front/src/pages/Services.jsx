import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import '../styles/Home.css';


function Services (){
    return(
        <>
            <div id='Home'>
                <h1>Services</h1>
                <Footer/>
            </div>
            <Outlet/>
        </>
    );
}

export default Services;