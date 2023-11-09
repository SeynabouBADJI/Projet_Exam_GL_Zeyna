package sn.app.event_back;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import sn.app.event_back.domain.Client;
import sn.app.event_back.domain.Evenement;
import sn.app.event_back.repository.ClientRepository;
import sn.app.event_back.repository.EvenementRepository;

@SpringBootApplication
public class Event implements CommandLineRunner{

	private static final Logger logger = 
	LoggerFactory.getLogger(Event.class);

	@Autowired
	private ClientRepository repository;

	@Autowired
	private EvenementRepository eRepository;

	public static void main(String[] args) {
		SpringApplication.run(Event.class, args);
	}

@Override
public void run (String... args) throws Exception {
	//Ajout d'un événement par un client
	Evenement event1= new Evenement(1, "26/07/2024", "bapteme", "MBOUR", "Je veux un mariage à la hauteur de mes attentes");
	Evenement event2= new Evenement(2, "31/12/2023", "réveillon", "POPENGUINE", "La veillée doit se tenir à 22h00. Soyez présents");
	eRepository.saveAll(Arrays.asList(event1,event2));
	//Ajout d'un client
	Client client1= new Client(500, "THIAO","Anna","Kénia28","785388980", "at.t@zig.univ.sn", null);
	Client client2= new Client(700, "NDIEGUENE","Ouzi","34A","782266869", "o.n14@zig.univ.sn", null);

	repository.saveAll(Arrays.asList(client1,client2));

	for (Client client: repository.findAll()){
		logger.info(client.getId_client()+ "" +client.getPrenom());
	}
}	

}
