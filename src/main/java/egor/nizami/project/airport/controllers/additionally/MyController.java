package egor.nizami.project.airport.controllers.additionally;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @GetMapping("/protected/resource")
    @CrossOrigin(origins = "http://localhost:5173")
    public String getProtectedResource() {
        return "Защищенный ресурс";
    }
}