package egor.nizami.project.airport.models;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Ticket")
public class Ticket {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotEmpty(message = "поле не должно быть пустым")
    @Size(min = 2, max = 100, message = "поле должно быть от 2 до 100 символов длиной")
    @Column(name = "where_from")
    private String whereFrom;

    @NotEmpty(message = "поле не должно быть пустым")
    @Size(min = 2, max = 100, message = "поле должно быть от 2 до 100 символов длиной")
    @Column(name = "where_to")
    private String whereTo;

    @NotEmpty(message = "поле не должно быть пустым")
    @Column(name = "flight_date_forth")
    private String flightDateForth;


    @Column(name = "flight_date_back")
    private String flightDateBack;


    @Min(value = 0, message = "людей не может быть отрицательное количество")
    @Column(name = "сhildren")
    private int children;

    @Min(value = 0, message = "людей не может быть отрицательное количество")
    @Column(name = "adults")
    private int adults;

    @NotEmpty
    @Column(name = "person_id")
    private int person_id;



    public Ticket() {
    }

    public Ticket(String whereFrom, String whereTo, String flightDateForth, String flightDateBack, int children, int adults, int person_id) {
        this.whereFrom = whereFrom;
        this.whereTo = whereTo;
        this.flightDateForth = flightDateForth;
        this.flightDateBack = flightDateBack;
        this.children = children;
        this.adults = adults;
        this.person_id = person_id;
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

    public int getPerson_id() {
        return person_id;
    }

    public void setPerson_id(int person_id) {
        this.person_id = person_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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


}
