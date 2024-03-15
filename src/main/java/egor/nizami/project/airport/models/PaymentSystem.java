package egor.nizami.project.airport.models;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Payment_system")
public class PaymentSystem {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotEmpty(message = "номер карты не должен быть пустым")
    @Size(min = 10, max = 20, message = "номер карты должна быть от 10 до 20 символов длиной")
    @Column(name = "card_number")
    private String cardNumber;

    @NotEmpty(message = "дата не должна быть пустой")
    @Size(min = 2, max = 6, message = "дата должна быть от 4 до 6 символов длиной")
    @Column(name = "card_date")
    private String cardDate;

    @NotEmpty(message = "cvv не должнен быть пустым")
    @Size(min = 2, max = 4, message = "cvv должен быть из 3 символов длиной")
    @Column(name = "cvv")
    private String cvv;

    @NotEmpty(message = "поле не должно быть пустым")
    @Column(name = "person_id")
    private int personId;

    public PaymentSystem() {
    }

    public PaymentSystem(String cardNumber, String cardDate, String cvv, int personId) {
        this.cardNumber = cardNumber;
        this.cardDate = cardDate;
        this.cvv = cvv;
        this.personId = personId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCardDate() {
        return cardDate;
    }

    public void setCardDate(String cardDate) {
        this.cardDate = cardDate;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }
}
