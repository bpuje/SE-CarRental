package cs425.swe.rentacar.repository;

import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.model.Car;
import cs425.swe.rentacar.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    List<Car> findByOwnerId(long userId);
    Car getById(long id);
    List<Car> findAllByCarBrandContainingOrModelContainingOrDescriptionContainingOrderByDescription(
            String carBrand,
            String model,
            String description
    );
    List<Car> findAllByPriceEquals(Double price);
    List<Car> findAllBySeatsEqualsOrYearEquals(Integer seats, Integer year);

}
