package egor.nizami.project.airport.controllers;

import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.models.Ticket;
import egor.nizami.project.airport.services.PersonService;
import egor.nizami.project.airport.services.TicketsToBuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Access;
import java.util.List;
import java.util.Map;

@RestController
public class TicketsToBuyController {

    private final TicketsToBuyService ticketsToBuyService;

    private final PersonService personService;

    @Autowired
    public TicketsToBuyController(TicketsToBuyService ticketsToBuyService, PersonService personService) {
        this.ticketsToBuyService = ticketsToBuyService;
        this.personService = personService;
    }


    @GetMapping("/ticketInformation")
    public ResponseEntity<?> ticketInformation(){
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Пользователь не аутентифицирован");
            }
            Person person = personService.foundByUsername(authentication.getName());

//            List<Ticket> tickets = ticketService.findAllTicketForUser(person.getId());

//            return ResponseEntity.ok(Map.of("tickets", tickets));
            return null;
        } catch (ClassCastException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ошибка при обработке данных пользователя");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Внутренняя ошибка сервера");
        }
    }
}
