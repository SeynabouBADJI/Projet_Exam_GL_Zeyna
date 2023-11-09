package sn.app.event_back.services;

import org.springframework.beans.factory.annotation.Autowired;

import sn.app.event_back.domain.Client;
import sn.app.event_back.repository.ClientRepository;

public class ClientService {
    
    @Autowired
    private ClientRepository clientRepository;

    private Iterable<Client> getClients(){
        return clientRepository.findAll();
    }
}
