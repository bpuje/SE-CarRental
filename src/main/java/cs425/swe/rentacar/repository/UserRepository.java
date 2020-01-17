package cs425.swe.rentacar.repository;

import cs425.swe.rentacar.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import cs425.swe.rentacar.model.User;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByUserName(String userName);
	Optional<User> findById(Long id);
	// Demo usage of custom query
	@Query("SELECT u FROM User u WHERE (u.userName  = 'admin')")
	User findAdmin();

	List<User> findByUserNameContainingOrEmailContainingOrFirstNameContainingOrLastNameContaining(String userName, String email, String firstName, String lastName);

	List<User> findByRolesIsIn(List<Role> roles);

	List<User> findByRoles(Role role);

	List<User> findAll();

	Boolean existsByUserName(String userName);

	Boolean existsByEmail(String userName);

	//@Query("SELECT c FROM Customer c WHERE (:name is null or c.name = :name) and (:email is null"
	//		  + " or c.email = :email)")
	//List<Customer> findCustomerByNameAndEmail(@Param("name") String name, @Param("email") String email);
}
