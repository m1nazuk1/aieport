package egor.nizami.project.airport.controllers;

import egor.nizami.project.airport.dto.PaymentSystemDTO;
import egor.nizami.project.airport.models.PaymentSystem;
import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.models.Ticket;
import egor.nizami.project.airport.services.PaymentSystemService;
import egor.nizami.project.airport.services.PersonService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/paymentSystem")
public class PaymentSystemsController {

    private final ModelMapper modelMapper;

    private final PaymentSystemService paymentSystemService;

    private final PersonService personService;

    public PaymentSystemsController(ModelMapper modelMapper, PaymentSystemService paymentSystemService, PersonService personService) {
        this.modelMapper = modelMapper;
        this.paymentSystemService = paymentSystemService;
        this.personService = personService;
    }


    @PostMapping("/save")
    @ResponseBody
    public ResponseEntity<?> savePayment(@RequestBody PaymentSystemDTO paymentSystemDTO){
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Пользователь не аутентифицирован");
            }


            PaymentSystem paymentSystem = convertToPayment(paymentSystemDTO);

            Person person = personService.foundByUsername(authentication.getName());

            paymentSystemService.save(paymentSystem, person.getId());


            return ResponseEntity.ok(Map.of("payment", paymentSystem));

        } catch (ClassCastException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ошибка при обработке данных пользователя");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Внутренняя ошибка сервера");
        }

    }


    @GetMapping("/getInformation")
    public ResponseEntity<?> getInformation(){
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Пользователь не аутентифицирован");
            }
            Person person = personService.foundByUsername(authentication.getName());
            PaymentSystem paymentSystem = paymentSystemService.foundPaymentForUser(person.getId());

            if (paymentSystem == null){
                return ResponseEntity.ok(Map.of("paymentSystem", "данных нет, Надо их ввести"));
            }else {
                return ResponseEntity.ok(Map.of("cardNumber", paymentSystem.getCardNumber(),
                        "date", paymentSystem.getCardDate(),
                        "cvv", paymentSystem.getCvv()));
            }
        } catch (ClassCastException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ошибка при обработке данных пользователя");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Внутренняя ошибка сервера");
        }
    }



    public PaymentSystem convertToPayment(PaymentSystemDTO paymentSystemDTO) {
        return this.modelMapper.map(paymentSystemDTO, PaymentSystem.class);
    }

}
