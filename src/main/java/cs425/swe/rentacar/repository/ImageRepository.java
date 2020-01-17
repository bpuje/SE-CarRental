package cs425.swe.rentacar.repository;

import cs425.swe.rentacar.model.Car;
import cs425.swe.rentacar.model.Image;
import cs425.swe.rentacar.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
}
