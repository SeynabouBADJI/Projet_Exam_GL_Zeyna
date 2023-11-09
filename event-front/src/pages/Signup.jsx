import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import '../styles/Home.css';

function Signup() {
    return(
        <>
            <div id="Home"> 
                <h1>Page d'Inscription du client cela doit se repercuter dans le back-end</h1>
                <Footer/>
            </div>
            <Outlet/>
        </>
    )
}
export default Signup;