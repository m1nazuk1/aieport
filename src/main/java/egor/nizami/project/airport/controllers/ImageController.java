//package egor.nizami.project.airport.controllers;
//
//import egor.nizami.project.airport.models.Image;
//import egor.nizami.project.airport.repositories.ImagesRepository;
//import egor.nizami.project.airport.repositories.PeopleRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.InputStreamResource;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import java.io.ByteArrayInputStream;
//
//@Controller
//@RequestMapping("/image")
//public class ImageController {
//    private final ImagesRepository imagesRepository;
//    private final PeopleRepository peopleRepository;
//    @Autowired
//    public ImageController(ImagesRepository imagesRepository, PeopleRepository peopleRepository) {
//        this.imagesRepository = imagesRepository;
//        this.peopleRepository = peopleRepository;
//    }
//
//    @GetMapping("/{username}")
//    @ResponseBody
//    public ResponseEntity<?> getImageId(@PathVariable("username") String username) {
//        String id = String.valueOf(peopleRepository.findByEmail(username).get().getPreviewImageId());
//        if(!id.matches("\\d+")) {
//            return ResponseEntity.badRequest().body("Invalid id format");
//        }
//        int imageId = Integer.parseInt(id);
//        Image image = imagesRepository.findById(imageId).orElse(null);
//        return ResponseEntity.ok()
//                .header("fileName", image.getOriginalFileName())
//                .contentType(MediaType.valueOf(image.getContentType()))
//                .contentLength(image.getSize())
//                .body(new InputStreamResource(new ByteArrayInputStream(image.getData())));
//    }
//}
