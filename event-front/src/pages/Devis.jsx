import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import '../styles/Home.css';
import "../styles/Devis.css";
import { Row, Container, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css"

function Devis() {
    return <>
    <div>
        <div>   
            <div className="contents">
            <Container>
                <div className="haut">
                    <p ><h4>
                        Sen Khew est une plateforme d'organisateur d’événements privés ou professionnels .<br></br>
                        Nous vous proposons les meilleures prestations ,avec des équipes professionnelles,
                        créatives et passionnées pour votre événement.<br></br>
                        Vous recevrez un devis sous un délais de 24h à 48h après avoir complété le formulaire ci-dessous.<br></br></h4>
                    </p><br></br><br></br>
                </div>
                <Row>
                    <Col>
                        <form >
                            <div class=" mb-3">
                                <label for="Nom" >Nom : </label>
                                <input type="text"  class="form-control" placeholder="Votre Nom" size="60"/>
                            </div>
                            <br></br>
                            <div class="mb-3">
                                <label >E-mail : </label>
                                <input type="email"  class="form-control" placeholder="Votre E-mail" size="60"/>
                            </div>
                            <br></br>
                            <div class="mb-3">
                                <label >Telephone : </label>
                                <input type="tel"  class="form-control" placeholder="Votre Telephone" size="60"/>
                            </div>
                            <br></br>
                           
                            <div class="mb-3">
                                <label >lieu d'evenement : </label>
                                <input type="text"  class="form-control" placeholder="Lieu d'evenement" size="60"/>
                            </div>
                            <br></br>
                            <div class="mb-3">
                                <label >Date de l'evenement : </label>
                                <input type="date"  class="form-control" size="60"/>
                            </div>
                            <br></br>
                            <div class="mb-3">
                                <label >Budget : </label>
                                <input type="price"  class="form-control" placeholder="Votre Budget en frcfa" size="60"/>
                            </div>
                            <br></br>
                            <div class="mb-3">
                                <label >type d'evenement : </label>
                                <select>
                                    <option>Mettez le type d'evenement</option>
                                    <option>Mariage</option>
                                    <option>Bapteme</option>
                                    <option>Anniversaire</option>
                                    <option>Thiante</option>
                                    <option>Communion/Confirmation</option>
                                    <option>Seminaire</option>
                                </select>
                            </div>
                            <br></br>    
                            
                            <div>
                                <label  for="commentaire">  Description: </label><br></br>
                                <textarea  cols="62" id="commentaire" rows="5" name="Commentaire"></textarea>
                            </div><br></br>
                        </form>

                        </Col>
                        <Col>
                            <br></br><br></br>
                            <div className="recherche">
                                <h3 >Recherche De Prestataires : </h3><br></br>
                                <select>
                                    <option>Traiteur</option>
                                    <option>Decoration</option>
                                    <option>Sonorisation</option>
                                    <option>Salle</option>
                                    <option>Maquillage</option>
                                    <option>Coiffure</option>
                                    <option>couturier</option>
                                </select>
                            </div>
                            <br></br>
                            <h4>Prestation</h4><br></br>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault"> Organisation de A a Z </label>
                            </div><br></br>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault"> Organisation toute la journee</label>
                            </div><br></br>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault"> Organisation  la veille</label>
                            </div><br></br>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault"> Espace shooting</label>
                            </div><br></br>   
                            <div className="buttons">
                                <input type="submit" class="btn btn-success" value="Envoyer" name="Envoyer"  size="60"/>
                                <input type="reset"  class="btn btn-secondary"  value="Renit" name="Reset" size="60" />
                            </div>
                            <br></br>                 
                          
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
        <Outlet/>
    </div>
    </>
}
export default Devis;