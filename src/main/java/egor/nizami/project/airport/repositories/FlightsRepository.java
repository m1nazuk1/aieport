package egor.nizami.project.airport.repositories;

import egor.nizami.project.airport.models.Flights;
import egor.nizami.project.airport.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FlightsRepository extends JpaRepository<Flights, Integer> {

    Optional<Flights> findByFromPlaceAndToPlace(String fromPlace, String toPlace);
}
