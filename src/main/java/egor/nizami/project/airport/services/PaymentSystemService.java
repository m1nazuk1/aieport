package egor.nizami.project.airport.services;

import egor.nizami.project.airport.models.PaymentSystem;
import egor.nizami.project.airport.repositories.PaymentSystemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PaymentSystemService {

    private final PaymentSystemsRepository paymentSystemsRepository;

    @Autowired
    public PaymentSystemService(PaymentSystemsRepository paymentSystemsRepository) {
        this.paymentSystemsRepository = paymentSystemsRepository;
    }

    @Transactional
    public void save(PaymentSystem paymentSystem, int personId){
        paymentSystem.setPersonId(personId);
        paymentSystemsRepository.save(paymentSystem);
    }


    public PaymentSystem foundPaymentForUser(int personId){
        return paymentSystemsRepository.findByPersonId(personId);
    }
}
