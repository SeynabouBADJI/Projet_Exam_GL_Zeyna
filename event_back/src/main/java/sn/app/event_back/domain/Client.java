package sn.app.event_back.domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany; 


@Entity
public class Client {
   @Id 
   @GeneratedValue(strategy=GenerationType.AUTO)
   private long id_client;
   private String nom,prenom,adresse,tel,mail;

    public Client() {
    }

    public Client(long id_client, String nom, String prenom, String adresse, String tel, String mail, List<Evenement> evenements) {
        super();
        this.id_client = id_client;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.tel = tel;
        this.mail = mail;
        this.evenements=evenements;
    }

    @JsonIgnore
	@OneToMany(cascade=CascadeType.ALL, mappedBy="client")
	// private List<Evenement> evenement;
    //@OneToMany(fetch = FetchType.LAZY)
    //@JoinColumn(name="evenement")
    private List<Evenement> evenements;

    public long getId_client() {
        return this.id_client;
    }

    public void setId_client(long id_client) {
        this.id_client = id_client;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getAdresse() {
        return this.adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getTel() {
        return this.tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getMail() {
        return this.mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }


}
