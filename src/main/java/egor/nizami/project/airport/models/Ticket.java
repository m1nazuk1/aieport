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
    @Column(name = "flight_date")
    private String flightDate;

    @Min(value = 0, message = "людей не может быть отрицательное количество")
    @Column(name = "сhildren")
    private int children;

    @Min(value = 0, message = "людей не может быть отрицательное количество")
    @Column(name = "adults")
    private int adults;


    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    @JsonBackReference
    private Person person;


    public Ticket(String whereFrom, String whereTo, String flightDate, int children, int adults) {
        this.whereFrom = whereFrom;
        this.whereTo = whereTo;
        this.flightDate = flightDate;
        this.children = children;
        this.adults = adults;
    }

    public Ticket() {
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


    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}
