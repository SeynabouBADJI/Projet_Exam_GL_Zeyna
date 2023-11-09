package sn.app.event_back.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import sn.app.event_back.domain.Client;

@Repository
public interface ClientRepository extends CrudRepository <Client,Long> {
    
}
