package egor.nizami.project.airport.repositories;

import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.models.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketsRepository extends JpaRepository<Ticket, Integer> {

//    Optional<Ticket> findByWhere(String username);

//    List<Ticket> findByPerson(String email);

}
