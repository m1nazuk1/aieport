package egor.nizami.project.airport.repositories;

import egor.nizami.project.airport.models.TicketsToBuy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketsToBuyRepository extends JpaRepository<TicketsToBuy, Integer> {

}
