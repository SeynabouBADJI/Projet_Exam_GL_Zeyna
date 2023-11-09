import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import '../styles/Home.css';
import "../styles/Galleries.css";
import { useState } from "react";
function Galleries() {
    
    
    return(
        <>
            <div id='Home'> 
                <div className="photos">
                    <h3>Photos de Mariage</h3>
                    <img src="../images/robe.jpeg"/>
                    <img src="../images/robe.jpeg"/>
                    <img src="../images/robe.jpeg"/>
                </div>
                <div className="photos">
                    <h3>Photos de traiteur</h3>
                    <img src="../images/p66.jpeg"/>
                    <img src="../images/p66.jpeg"/>
                    <img src="../images/p66.jpeg"/>
                </div>
                <div className="photos">
                    <h3>Photos de salle </h3>
                    <img src="../images/p666.jpeg"/>
                    <img src="../images/p666.jpeg"/>
                    <img src="../images/p666.jpeg"/>
                </div>
                <div className="photos">
                    <h3>Photos de bapteme </h3>
                    <img src="../images/p111.jpg"/>
                    <img src="../images/p111.jpg"/>
                    <img src="../images/p111.jpg"/>
                </div>
                <div className="photos">
                    <h3>Photos de communin/confirmation </h3>
                    <img src="../images/p999.jpg"/>
                    <img src="../images/p999.jpg"/>
                    <img src="../images/p999.jpg"/>
                </div>
                
                <Footer />
            </div>  
            <Outlet/>
        </>
    )
}
export default Galleries;