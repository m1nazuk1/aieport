package egor.nizami.project.airport.services;

import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.models.Ticket;
import egor.nizami.project.airport.repositories.TicketsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
public class TicketService {

    private final TicketsRepository ticketsRepository;
    private final PersonService personService;

    public TicketService(TicketsRepository ticketsRepository, PersonService personService) {
        this.ticketsRepository = ticketsRepository;
        this.personService = personService;
    }

    @Transactional
    public void createTicket(Ticket ticket, Person person){
        person.addTicketToProduct(ticket);
        personService.updateTickets(person.getEmail(), person.getTickets());
        ticket.setPerson(person);
        ticketsRepository.save(ticket);
    }

//    public ArrayList<Ticket> findTicketByUserEmail(String email){
//        Person person = personService.foundByUsername(email);
//        return ticketsRepository.findByEmail(person.getEmail());
//    }
}
