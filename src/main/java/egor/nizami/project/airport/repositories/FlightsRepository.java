package egor.nizami.project.airport.repositories;

import egor.nizami.project.airport.models.Flights;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FlightsRepository extends JpaRepository<Flights, Integer> {

    @Query("SELECT DISTINCT f.fromPlace FROM Flights f")
    List<String> findAllFromPlace();

    @Query("SELECT DISTINCT f.toPlace FROM Flights f")
    List<String> findAllToPlace();

    Optional<Flights> findByFromPlaceAndToPlace(String fromPlace, String toPlace);
}
