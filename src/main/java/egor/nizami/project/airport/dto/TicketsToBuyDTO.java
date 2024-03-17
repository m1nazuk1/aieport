package egor.nizami.project.airport.dto;

import javax.persistence.Column;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class TicketsToBuyDTO {

    @NotEmpty(message = "поле не должно быть пустым")
    private String companyName;

    @NotEmpty(message = "поле не должно быть пустым")
    @Size(min = 2, max = 100, message = "поле должно быть от 2 до 100 символов длиной")
    private String whereFrom;

    @NotEmpty(message = "поле не должно быть пустым")
    @Size(min = 2, max = 100, message = "поле должно быть от 2 до 100 символов длиной")
    private String whereTo;

    @NotEmpty(message = "поле не должно быть пустым")
    private String flightDateForth;

    private String flightDateBack;

    @NotEmpty(message = "поле не должно быть пустым")
    private String flightTimeForth;

    private String flightTimeBack;

    @Min(value = 0, message = "людей не может быть отрицательное количество")
    private int children;

    @Min(value = 0, message = "людей не может быть отрицательное количество")
    private int adults;

    @Min(value = 0, message = "цена не может быть отрицательным")
    private int price;


    public TicketsToBuyDTO(String companyName, String whereFrom, String whereTo, String flightDateForth, String flightDateBack, String flightTimeForth, String flightTimeBack, int children, int adults, int price) {
        this.companyName = companyName;
        this.whereFrom = whereFrom;
        this.whereTo = whereTo;
        this.flightDateForth = flightDateForth;
        this.flightDateBack = flightDateBack;
        this.flightTimeForth = flightTimeForth;
        this.flightTimeBack = flightTimeBack;
        this.children = children;
        this.adults = adults;
        this.price = price;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getWhereFrom() {
        return whereFrom;
    }

    public void setWhereFrom(String whereFrom) {
        this.whereFrom = whereFrom;
    }

    public String getWhereTo() {
        return whereTo;
    }

    public void setWhereTo(String whereTo) {
        this.whereTo = whereTo;
    }

    public String getFlightDateForth() {
        return flightDateForth;
    }

    public void setFlightDateForth(String flightDateForth) {
        this.flightDateForth = flightDateForth;
    }

    public String getFlightDateBack() {
        return flightDateBack;
    }

    public void setFlightDateBack(String flightDateBack) {
        this.flightDateBack = flightDateBack;
    }

    public String getFlightTimeForth() {
        return flightTimeForth;
    }

    public void setFlightTimeForth(String flightTimeForth) {
        this.flightTimeForth = flightTimeForth;
    }

    public String getFlightTimeBack() {
        return flightTimeBack;
    }

    public void setFlightTimeBack(String flightTimeBack) {
        this.flightTimeBack = flightTimeBack;
    }

    public int getChildren() {
        return children;
    }

    public void setChildren(int children) {
        this.children = children;
    }

    public int getAdults() {
        return adults;
    }

    public void setAdults(int adults) {
        this.adults = adults;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
