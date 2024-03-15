package egor.nizami.project.airport.controllers;

import egor.nizami.project.airport.dto.AuthenticationDTO;
import egor.nizami.project.airport.dto.PersonDTO;
import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.security.JWTUtil;
import egor.nizami.project.airport.security.PersonDetails;
//import egor.nizami.project.airport.services.ImageService;
import egor.nizami.project.airport.services.PersonDetailsService;
import egor.nizami.project.airport.services.RegistrationService;
import egor.nizami.project.airport.util.PersonValidator;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.Map;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

//    private final ImageService imageService;
    private final RegistrationService registrationService;
    private final PersonValidator personValidator;
    private final JWTUtil jwtUtil;
    private final ModelMapper modelMapper;
    private final AuthenticationManager authenticationManager;

    private final PersonDetailsService personDetailsService;


    public AuthController(RegistrationService registrationService, PersonValidator personValidator,
                          JWTUtil jwtUtil, ModelMapper modelMapper, AuthenticationManager authenticationManager,
                          PersonDetailsService personDetailsService) {
        this.registrationService = registrationService;
        this.personValidator = personValidator;
        this.jwtUtil = jwtUtil;
        this.modelMapper = modelMapper;
        this.authenticationManager = authenticationManager;
        this.personDetailsService = personDetailsService;
    }

    @PostMapping("/registration")
    public Map<String, String> performRegistration(@RequestBody PersonDTO personDTO, BindingResult bindingResult) throws IOException {

        Person person = convertToPerson(personDTO);

        personValidator.validate(person, bindingResult);

        if (bindingResult.hasErrors()){
            return Map.of("message", "ошибка при валидации: " + bindingResult.getFieldError());
        }

        System.out.println(person);
        registrationService.register(person);

        String token = jwtUtil.generateToken(person.getUserName());
        return Map.of("jwt-token", token);
    }


//    @Transactional
//    @PutMapping("/forImage")
//    public ResponseEntity<?> forImage(@RequestParam("image") MultipartFile image) throws IOException {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if (authentication == null || !authentication.isAuthenticated()) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Пользователь не аутентифицирован");
//        }
//        Person person = personDetailsService.loadPersonByUsername(((PersonDetails) authentication.getPrincipal()).getUsername());
//
//        imageService.enterImageId(person.getUserName(), image);
//
//        return ResponseEntity.ok(Map.of("message", "данные пользователя успешно изменены"));
//    }

    //JSON:
    // {
    //      "username": "aaa",
    //      "password": "aaa"
    // }

    //если мы хотим принять в контроллер этот ОБЪЕКТ , то нам нужен объект класса с совпадающими названиями полей

    @PostMapping("/login")
    public Map<String, String> performLogin(@RequestBody AuthenticationDTO authenticationDTO) {
        UsernamePasswordAuthenticationToken authInputToken =
                new UsernamePasswordAuthenticationToken(authenticationDTO.getEmail(),
                        authenticationDTO.getPassword());

        try {
            authenticationManager.authenticate(authInputToken);
        } catch (BadCredentialsException e) {
            return Map.of("message", "Неверно введен пароль или почта!");
        }

        String token = jwtUtil.generateToken(authenticationDTO.getEmail());
        System.out.println(token);
        return Map.of("jwt-token", token);
    }

    public Person convertToPerson(PersonDTO personDTO) {
        return this.modelMapper.map(personDTO, Person.class);
    }


}