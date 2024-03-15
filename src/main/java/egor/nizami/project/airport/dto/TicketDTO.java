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
    private String flightDate;

    @Min(value = 0, message = "людей не может быть отрицательное количество")
    private int children;

    @Min(value = 0, message = "людей не может быть отрицательное количество")
    private int adults;


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

    public String getFlightDate() {
        return flightDate;
    }

    public void setFlightDate(String flightDate) {
        this.flightDate = flightDate;
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

    @Override
    public String toString() {
        return "TicketDTO{" +
                "whereFrom='" + whereFrom + '\'' +
                ", whereTo='" + whereTo + '\'' +
                ", flightDate='" + flightDate + '\'' +
                ", children=" + children +
                ", adults=" + adults +
                '}';
    }
}
