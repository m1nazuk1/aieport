package egor.nizami.project.airport.repositories;

import egor.nizami.project.airport.models.Image;
import egor.nizami.project.airport.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagesRepository extends JpaRepository<Image, Integer> {
    List<Image> findImagesByPerson(Person person);

    Image findImageBySize(Long size);
}