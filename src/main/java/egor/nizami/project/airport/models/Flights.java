package egor.nizami.project.airport.models;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Flights")
public class Flights {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotEmpty(message = "поле не должно быть пустой")
    @Size(min = 2, max = 100, message = "поле должно быть от 2 до 100 символов длиной")
    @Column(name = "from_place")
    private String fromPlace;

    @NotEmpty(message = "поле не должно быть пустой")
    @Size(min = 2, max = 100, message = "поле должно быть от 2 до 100 символов длиной")
    @Column(name = "to_place")
    private String toPlace;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFromPlace() {
        return fromPlace;
    }

    public void setFromPlace(String fromPlace) {
        this.fromPlace = fromPlace;
    }

    public String getToPlace() {
        return toPlace;
    }

    public void setToPlace(String toPlace) {
        this.toPlace = toPlace;
    }

    public Flights() {
    }

    public Flights(String fromPlace, String toPlace) {
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
    }
}
