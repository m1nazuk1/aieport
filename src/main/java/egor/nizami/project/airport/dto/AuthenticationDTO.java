package egor.nizami.project.airport.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;


public class AuthenticationDTO {
    @NotEmpty(message = "Логин не должен быть пустым")
    @Size(min = 2, max = 100, message = "Логин должен быть от 2 до 100 символов длиной")
    @Email
    private String email;

    private String password;

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
}