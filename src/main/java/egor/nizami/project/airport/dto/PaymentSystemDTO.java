package egor.nizami.project.airport.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class PaymentSystemDTO {
    @NotEmpty(message = "номер карты не должен быть пустым")
    @Size(min = 10, max = 20, message = "номер карты должна быть от 10 до 20 символов длиной")
    private String cardNumber;

    @NotEmpty(message = "дата не должна быть пустой")
    @Size(min = 2, max = 6, message = "дата должна быть от 4 до 6 символов длиной")
    private String cardDate;

    @NotEmpty(message = "cvv не должнен быть пустым")
    @Size(min = 2, max = 4, message = "cvv должен быть из 3 символов длиной")
    private String cvv;


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
}
