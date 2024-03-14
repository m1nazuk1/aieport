package egor.nizami.project.airport.controllers;

import egor.nizami.project.airport.dto.TicketDTO;
import egor.nizami.project.airport.models.Flights;
import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.models.Ticket;
import egor.nizami.project.airport.security.PersonDetails;
import egor.nizami.project.airport.services.FlightsService;
import egor.nizami.project.airport.services.PersonDetailsService;
import egor.nizami.project.airport.services.PersonService;
import egor.nizami.project.airport.services.TicketService;
import egor.nizami.project.airport.util.FlightsValidator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

@Controller
@RequestMapping("/ticket")
public class TicketController {

    private final ModelMapper modelMapper;

    private final TicketService ticketService;

    private final PersonService personService;

    private final PersonDetailsService personDetailsService;

    private final FlightsValidator flightsValidator;

    private final FlightsService flightsService;

    @Autowired
    public TicketController(ModelMapper modelMapper, TicketService ticketService, PersonService personService, PersonDetailsService personDetailsService, FlightsValidator flightsValidator, FlightsService flightsService) {
        this.modelMapper = modelMapper;
        this.ticketService = ticketService;
        this.personService = personService;
        this.personDetailsService = personDetailsService;
        this.flightsValidator = flightsValidator;
        this.flightsService = flightsService;
    }


    @GetMapping("/payment/{fromPlace}/{toPlace}")
    public ResponseEntity<?> payment(@PathVariable String fromPlace, @PathVariable String toPlace) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Пользователь не аутентифицирован");
            }

            fromPlace = fromPlace.replace("{", "").replace("}", "");
            toPlace = toPlace.replace("{", "").replace("}", "");
            System.out.println(fromPlace + " " + toPlace);
            Optional<Flights> flights = flightsService.loadUserByFromPlaceAndToPlace(fromPlace, toPlace);

            if (flights.isEmpty()){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("перелет не найден");
            }
            
            Person person = personDetailsService.loadPersonByUsername(((PersonDetails) authentication.getPrincipal()).getUsername());

            return ResponseEntity.ok(Map.of(
                    "HasFlights", "true"));
        } catch (ClassCastException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ошибка при обработке данных пользователя");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Внутренняя ошибка сервера");
        }
    }


    @PostMapping("/save")
    @ResponseBody
    public ResponseEntity<?> saveTicket(@RequestBody TicketDTO ticketDTO, BindingResult bindingResult) throws IOException {

//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if (authentication == null || !authentication.isAuthenticated()) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Пользователь не аутентифицирован");
//        }

        Ticket ticket = convertToTicket(ticketDTO);

        // ticketValidators

        if (bindingResult.hasErrors()){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ошибка при обработке данных пользователя");
//            return Map.of("message", "ошибка при валидации: " + bindingResult.getFieldError());
        }

        Person person = personService.foundByUsername("alekperov-nizam@mail.ru");

        ticketService.createTicket(ticket, person);

        return ResponseEntity.ok(Map.of(
                "myTicket", ticket));

//        return Map.of("jwt-token", token);
    }


    public Ticket convertToTicket(TicketDTO ticketDTO) {
        return this.modelMapper.map(ticketDTO, Ticket.class);
    }



    @GetMapping("/show/{email}")
    @ResponseBody
    public ResponseEntity<?> showProfile(@PathVariable("email") String email){
//        try {
//            Person person = personService.foundByUsername(email);
//            ArrayList<Ticket> tickets = ticketService.findTicketByUserEmail(person.getEmail());
//            System.out.println(ticket);
//            return ResponseEntity.ok(Map.of(
//                    "firstname", person.getUserName(),
//                    "lastname", person.getSurname(),
//                    "Patronimyc", person.getPatronimyc(),
//                    "Birthday", person.getBirthday(),
//                    "Phone", person.getPhone(),
//                    "password", person.getPassword(),
//                    "ticketsId", person.getTickets()));
//        }catch (ClassCastException e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ошибка при обработке данных пользователя");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Внутренняя ошибка сервера");
//        }
//
        return ResponseEntity.ok("");
    }


}
