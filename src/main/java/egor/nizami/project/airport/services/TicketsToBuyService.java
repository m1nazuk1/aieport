package egor.nizami.project.airport.services;

import egor.nizami.project.airport.repositories.TicketsRepository;
import org.springframework.stereotype.Service;

@Service
public class TicketsToBuyService {

    private final TicketsRepository ticketsRepository;

    public TicketsToBuyService(TicketsRepository ticketsRepository) {
        this.ticketsRepository = ticketsRepository;
    }
}
