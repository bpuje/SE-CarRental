package cs425.swe.rentacar.repository;

import cs425.swe.rentacar.model.Rental;
import cs425.swe.rentacar.model.RentalStatus;
import cs425.swe.rentacar.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public interface RentalRepository extends JpaRepository<Rental, Long>{
	List<Rental> findByCarOwnerId(long userId);
	List<Rental> findByUserUserNameContainingOrCarModelContaining(String user_userName, String car_model);
	Page<Rental> findByCarOwnerId(long car_owner_id, Pageable pageable);
	Page<Rental> findByUserId(long userId, Pageable pageable);
}
