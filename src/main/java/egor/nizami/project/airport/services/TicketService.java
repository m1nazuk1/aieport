package egor.nizami.project.airport.services;

import egor.nizami.project.airport.models.Flights;
import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.models.Ticket;
import egor.nizami.project.airport.repositories.TicketsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
public class TicketService {

    private final TicketsRepository ticketsRepository;
    private final PersonService personService;

    @Autowired
    public TicketService(TicketsRepository ticketsRepository, PersonService personService) {
        this.ticketsRepository = ticketsRepository;
        this.personService = personService;
    }



//    public ArrayList<Ticket> findTicketByUserEmail(String email){
//        Person person = personService.foundByUsername(email);
//        return ticketsRepository.findByEmail(person.getEmail());
//    }
}
