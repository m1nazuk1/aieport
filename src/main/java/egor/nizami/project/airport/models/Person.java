package egor.nizami.project.airport.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
@Table(name = "person")
public class Person {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @NotEmpty(message = "фамилия не должна быть пустой")
    @Size(min = 2, max = 100, message = "фамилия должна быть от 2 до 100 символов длиной")
    @Column(name = "surname")
    private String surname;


    @NotEmpty(message = "имя не должно быть пустым")
    @Size(min = 2, max = 100, message = "имя должно быть от 2 до 100 символов длиной")
    @Column(name = "user_name")
    private String userName;


    @NotEmpty(message = "отчество не должно быть пустым")
    @Size(min = 2, max = 100, message = "отчество должно быть от 2 до 100 символов длиной")
    @Column(name = "patronimyc")
    private String patronimyc;


    @NotEmpty(message = "дата рождения не должна быть пустым")
    @Column(name = "birthday")
    private String birthday;

    @NotEmpty(message = "номер телефона не должен быть пустым")
    //@Min(value = 0)
//    @Pattern(regexp = "\\\\+?[1-9][0-9]{7,14}")    -   доделать
    @Column(name = "phone")
    private String phone;

    @NotEmpty(message = "почта не должна быть пустой")
    @Size(min = 2, max = 100, message = "почта должна быть от 2 до 100 символов длиной")
    @Column(name = "email")
    @Email
    private String email;

    @Column(name = "password")
    @NotEmpty(message = "пароль не должен быть пустым")
    @Size(min = 2, max = 100, message = "пароль должен быть от 2 до 100 символов длиной")
    private String password;

    @Column(name = "role")
    private String role;


//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "person")
//    @JsonManagedReference
//    private List<Image> images = new ArrayList<>();
//
//    @Column(name = "preview_image_id")
//    private int previewImageId;

//    public void addImageToProduct(Image image) {
//        image.setPerson(this);
//        images.add(image);
//    }

    public Person() {
    }

    public Person(String surname, String userName, String patronimyc, String birthday, String phone, String email, String password) {
        this.surname = surname;
        this.userName = userName;
        this.patronimyc = patronimyc;
        this.birthday = birthday;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPatronimyc() {
        return patronimyc;
    }

    public void setPatronimyc(String patronimyc) {
        this.patronimyc = patronimyc;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

//    public List<Image> getImages() {
//        return images;
//    }
//
//    public void setImages(List<Image> images) {
//        this.images = images;
//    }
//
//    public int getPreviewImageId() {
//        return previewImageId;
//    }
//
//    public void setPreviewImageId(int previewImageId) {
//        this.previewImageId = previewImageId;
//    }
}
