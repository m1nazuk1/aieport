package egor.nizami.project.airport.controllers;

import egor.nizami.project.airport.services.FlightsService;
import org.atmosphere.config.service.Get;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/flights")
public class FlightsController {

    private final FlightsService flightsService;

    @Autowired
    public FlightsController(FlightsService flightsService) {
        this.flightsService = flightsService;
    }

    @GetMapping("/listAllFlightsName")
    public ResponseEntity<?> allFlightsName(){
        List<List<String>> flight = flightsService.loadAllFlights();
        return ResponseEntity.ok(Map.of("fromPlace", flight.get(0),
                "toPlace", flight.get(0)));
    }
}
