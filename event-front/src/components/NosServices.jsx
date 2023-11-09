import React from 'react';
import '../styles/NosServices.css';
import Anniversaire from './Anniversaire'
import Mariage from './Mariage';

function NosServices() {
    return ( 
        <div>  
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <h1 className='titre'>Nos Services Evenementiels</h1>
            <div className="nosServices">
                <div className='leftSide'>
                    <p>L'organisation d'evenement requiert souvent enormemment de temps et peut etre parfois contraignante.
                        Sen Event est une agence professionnelle, competente et ideale afin de vous accompagner dans ce processus d'organisation.
                        Confiez-nous l'organisation de vos evenements afin d'economiser votre energie, gagner du temps, vous epargner le stress et les soicis.
                        Que ca soit pour un mariage, un evenement corporate, un anniversaire, un pot de depart.
                        Sen Event est l'agence qu'il vous faut pour realiser vos 
                        evenements en toute confiance. <br/>Aborder ce moment de plaisir avec serenite. 
                    </p>
                    <div className='nosEvents'>
                        <Anniversaire/>
                        <Mariage/>
                        <Anniversaire/>
                        <Mariage/>
                    </div>
                </div>
                <div className='rightSide'>
                    <h2>Nos Prestations <br/> Chez <br/>Sen Khew</h2>
                    <h3>C'est avec passion que notre agence evenementielle organise tous vos evenements de A a Z a votre image</h3>
                    <div>
                        <h3 className='checkmark'>Recherche de Lieu</h3>
                        <h3 className='checkmark'>Coordination</h3>
                        <h3 className='checkmark'>Recherche de prestataires</h3>
                        <h3 className='checkmark'>   Gestion des prestataires</h3>
                        <h3 className='checkmark'>Accompagnement</h3>
                        <h3 className='checkmark'>Proposition de concepts innovants</h3>
                        <h3 className='checkmark'>Supervision de l'evenement le jour J</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NosServices;