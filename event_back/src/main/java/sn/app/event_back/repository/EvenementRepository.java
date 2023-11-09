package sn.app.event_back.repository;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;
import sn.app.event_back.domain.Evenement;

@Repository

public interface EvenementRepository extends CrudRepository <Evenement,Long> {
    
}
