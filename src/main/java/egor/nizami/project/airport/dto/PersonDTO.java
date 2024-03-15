package egor.nizami.project.airport.dto;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

public class PersonDTO {
    @NotEmpty(message = "фамилия не должна быть пустой")
    @Size(min = 2, max = 100, message = "фамилия должна быть от 2 до 100 символов длиной")
    private String surname;


    @NotEmpty(message = "имя не должно быть пустым")
    @Size(min = 2, max = 100, message = "имя должно быть от 2 до 100 символов длиной")
    private String userName;


    @NotEmpty(message = "отчество не должно быть пустым")
    @Size(min = 2, max = 100, message = "отчество должно быть от 2 до 100 символов длиной")
    private String patronimyc;


    private String birthday;

    @NotEmpty(message = "номер телефона не должен быть пустым")
//    @Pattern(regexp = "\\\\+?[1-9][0-9]{7,14}")    -   доделать
    private String phone;

    @NotEmpty(message = "почта не должна быть пустой")
    @Size(min = 2, max = 100, message = "почта должна быть от 2 до 100 символов длиной")
    @Email
    private String email;

    @NotEmpty(message = "пароль не должен быть пустым")
    @Size(min = 2, max = 100, message = "пароль должен быть от 2 до 100 символов длиной")
    private String password;


    @NotEmpty(message = "пароль не должен быть пустым")
    @Size(min = 2, max = 100, message = "пароль должен быть от 2 до 100 символов длиной")
    private String repeatPassword;

    public PersonDTO() {
    }


    @Override
    public String toString() {
        return "PersonDTO{" +
                "surname='" + surname + '\'' +
                ", userName='" + userName + '\'' +
                ", patronimyc='" + patronimyc + '\'' +
                ", birthday='" + birthday + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", repeatPassword='" + repeatPassword + '\'' +
                '}';
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

    public String getRepeatPassword() {
        return repeatPassword;
    }

    public void setRepeatPassword(String repeatPassword) {
        this.repeatPassword = repeatPassword;
    }
}