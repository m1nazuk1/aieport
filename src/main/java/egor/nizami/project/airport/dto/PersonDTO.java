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

@Getter
@Setter
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
}