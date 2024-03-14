package egor.nizami.project.airport.util;

import egor.nizami.project.airport.models.Flights;
import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.services.FlightsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.client.HttpClientErrorException;

@Component
public class FlightsValidator implements Validator {

    private final FlightsService flightsService;

    @Autowired
    public FlightsValidator(FlightsService flightsService) {
        this.flightsService = flightsService;
    }


    @Override
    public boolean supports(Class<?> aClass) {
        return Flights.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        Flights flights = (Flights) o;
        try {
            if (flightsService.loadUserByFromPlaceAndToPlace(flights.getFromPlace(), flights.getToPlace()) == null) {
                errors.rejectValue("fromPlace", "", "такой перелет не существует");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
