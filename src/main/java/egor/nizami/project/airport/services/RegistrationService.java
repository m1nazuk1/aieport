package egor.nizami.project.airport.services;

import egor.nizami.project.airport.models.Image;
import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.repositories.ImagesRepository;
import egor.nizami.project.airport.repositories.PeopleRepository;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;

import static org.aspectj.weaver.tools.cache.SimpleCacheFactory.path;


@Service
public class RegistrationService {

    private final PeopleRepository peopleRepository;
    private final PasswordEncoder passwordEncoder;
    private final ImagesRepository imagesRepository;

    @Autowired
    public RegistrationService(PeopleRepository peopleRepository, PasswordEncoder passwordEncoder, ImagesRepository imagesRepository) {
        this.peopleRepository = peopleRepository;
        this.passwordEncoder = passwordEncoder;
        this.imagesRepository = imagesRepository;
    }

    @Transactional
    public void register(Person person) throws IOException {
        person.setPassword(passwordEncoder.encode(person.getPassword()));
        person.setRole("ROLE_USER");
        Image image = imagesRepository.findById(1).get();
        person.setPreviewImageId(image.getId());
        person.setImages(Collections.singletonList(image));

        peopleRepository.save(person);

    }
}