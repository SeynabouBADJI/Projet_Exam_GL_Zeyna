import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import '../styles/Home.css';
import NosServices from "../components/NosServices";


function Services (){
    return(
        <>
            <div id='Home'>
                <NosServices/>
                <Footer/>
            </div>
            <Outlet/>
        </>
    );
}

export default Services;