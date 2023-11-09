package sn.app.event_back.domain;


import java.sql.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
//import jakarta.persistence.OneToOne; 


@Entity
public class Evenement {
    @Id 
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id_Event;
    private Date date; 
    private String type,lieu,description;

    // @ManyToOne(fetch = FetchType.LAZY)
	// @JoinColumn(name = "client ")
    
    // //private Client client;

    public Evenement() {
    }

    public Evenement(long id_Event, String string, String type, String lieu, String description) {
        super();
        this.id_Event = id_Event;
        this.date = date;
        this.type = type;
        this.lieu = lieu;
        this.description = description;
        // this.client = client;
    }
    //, mappedBy = "evenement" a remettre après le CascadeType.ALL après discussion ou pas
    @ManyToOne(cascade = CascadeType.ALL )
    private Client client;
   

    public Client getClient() {
        return this.client;
    }

    public void setClient(Client client) {
        this.client = client;
    }




    public long getId_Event() {
        return this.id_Event;
    }

    public void setId_Event(long id_Event) {
        this.id_Event = id_Event;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLieu() {
        return this.lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
