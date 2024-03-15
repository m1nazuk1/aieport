package egor.nizami.project.airport.repositories;

import egor.nizami.project.airport.models.PaymentSystem;
import egor.nizami.project.airport.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotEmpty;
import java.util.Optional;

@Repository
public interface PaymentSystemsRepository extends JpaRepository<PaymentSystem, Integer> {

    PaymentSystem findByPersonId(int personId);

    void deleteByPersonId(int personId);
}
