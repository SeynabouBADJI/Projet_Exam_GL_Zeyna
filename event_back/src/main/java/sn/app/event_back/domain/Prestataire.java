package sn.app.event_back.domain;

import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne; 
@Entity
public class Prestataire {
    @Id 
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id_Prest;
    private String nom,type_service,adresse,mail,tel;

    //  @ManyToOne(fetch = FetchType.LAZY)
	// @JoinColumn(name = "evenement ")

    // private Evenement evenement;

    public Prestataire() {
    }


    public Prestataire(long id_Prest, String nom, String type_service, String adresse, String mail, String tel) {
        this.id_Prest = id_Prest;
        this.nom = nom;
        this.type_service = type_service;
        this.adresse = adresse;
        this.mail = mail;
        this.tel = tel;
    }


    // public Evenement getEvenement() {
    //     return this.evenement;
    // }

    // public void setEvenement(Evenement evenement) {
    //     this.evenement = evenement;
    // }

    public long getId_Prest() {
        return this.id_Prest;
    }

    public void setId_Prest(long id_Prest) {
        this.id_Prest = id_Prest;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getType_service() {
        return this.type_service;
    }

    public void setType_service(String type_service) {
        this.type_service = type_service;
    }

    public String getAdresse() {
        return this.adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getMail() {
        return this.mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getTel() {
        return this.tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

}
