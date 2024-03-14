package egor.nizami.project.airport.services;

import egor.nizami.project.airport.repositories.TicketsRepository;

public class TicketDetailsService {

    private final TicketsRepository ticketsRepository;


    public TicketDetailsService(TicketsRepository ticketsRepository) {
        this.ticketsRepository = ticketsRepository;
    }



}
