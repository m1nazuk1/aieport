package egor.nizami.project.airport.dto;

import javax.persistence.Column;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class TicketDTO {
    @NotEmpty(message = "поле не должно быть пустым")
    @Size(min = 2, max = 100, message = "поле должно быть от 2 до 100 символов длиной")
    private String whereFrom;

    @NotEmpty(message = "поле не должно быть пустым")
    @Size(min = 2, max = 100, message = "поле должно быть от 2 до 100 символов длиной")
    private String whereTo;

    @NotEmpty(message = "поле не должно быть пустым")
    private String flightDateForth;


    private String flightDateBack;

    @Min(value = 0, message = "людей не может быть отрицательное количество")
    private int children;

    @Min(value = 0, message = "людей не может быть отрицательное количество")
    private int adults;


    public TicketDTO(String whereFrom, String whereTo, String flightDateForth, String flightDateBack, int children, int adults) {
        this.whereFrom = whereFrom;
        this.whereTo = whereTo;
        this.flightDateForth = flightDateForth;
        this.flightDateBack = flightDateBack;
        this.children = children;
        this.adults = adults;
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

    public TicketDTO() {
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
}
