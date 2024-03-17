package egor.nizami.project.airport.services;

import egor.nizami.project.airport.models.Image;
import egor.nizami.project.airport.models.Person;
import egor.nizami.project.airport.repositories.ImagesRepository;
import egor.nizami.project.airport.repositories.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;

@Service
public class ImageService {
    private final PeopleRepository peopleRepository;
    private final ImagesRepository imagesRepository;
    @Autowired
    public ImageService(PeopleRepository peopleRepository, ImagesRepository imagesRepository) {
        this.peopleRepository = peopleRepository;
        this.imagesRepository = imagesRepository;
    }

    @Transactional
    public void enterImageId(String username, MultipartFile file) throws IOException {
        Person person = peopleRepository.findByEmail(username).get();

        Image image;
        if(file.getSize() != 0) {
            image = toImageEntity(file);
            image.setPersonUserName(username);
            image.setPreviewImage(true);
            image.setId(person.getId());
            image = imagesRepository.save(image);
            person.setPreviewImageId(image.getId());
            person.setImages(Collections.singletonList(image));
            image.setPerson(person);
            imagesRepository.save(image);

        }


        peopleRepository.save(person);


    }


    public Image toImageEntity(MultipartFile file) throws IOException {
        Image image = new Image();
        image.setName(file.getName());
        image.setOriginalFileName(file.getOriginalFilename());
        image.setContentType(file.getContentType());
        image.setSize(file.getSize());
        image.setData(file.getBytes());
        return image;
    }
}
