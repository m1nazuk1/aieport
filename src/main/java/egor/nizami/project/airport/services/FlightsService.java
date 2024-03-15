package egor.nizami.project.airport.services;

import egor.nizami.project.airport.models.Flights;
import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.repositories.FlightsRepository;
import egor.nizami.project.airport.security.PersonDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FlightsService {

    private final FlightsRepository flightsRepository;

    @Autowired
    public FlightsService(FlightsRepository flightsRepository) {
        this.flightsRepository = flightsRepository;
    }

    public Optional<Flights> loadUserByFromPlaceAndToPlace(String fromPlace, String toPlace) throws Exception {
//        Optional<Person> person = peopleRepository.findByEmail(s);
        Optional<Flights> flights = flightsRepository.findByFromPlaceAndToPlace(fromPlace, toPlace);


        return flights;
    }


    public List<List<String>> loadAllFlights(){
        List<String> fromPlace = flightsRepository.findAllFromPlace();
        List<String> toPlace = flightsRepository.findAllToPlace();

        List<List<String>> allFlight = new ArrayList<>();
        allFlight.add(fromPlace);
        allFlight.add(toPlace);
        return allFlight;
    }


}
