package cs425.swe.rentacar.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.model.Car;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.model.UserStatus;
import cs425.swe.rentacar.repository.UserRepository;
import cs425.swe.rentacar.service.CarService;
import cs425.swe.rentacar.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestCarService {

	@Autowired
	private CarService carService;
	
	private Car carTest;
	private User userTest;
	
	@Before
	public void setup() {
		userTest = new User("u-test-1001", "u-test-1001@gmail.ux", "u-test", "-001");
		userTest.setStatus(UserStatus.Active);
		userTest.setPassword("pwr-pss-aha");

		try {
			//userTest = userRepo.saveAndFlush(userTest);
		} catch(Exception ex) { 
			ex.printStackTrace();
		}
		
		// carTest = new Car("Test Brand", "Mi", 1992, 12, 4, owner)
	}
	
	@After
	public void teardown() {
		try {
			
		} catch(Exception ex) { }
	}

	@Test
	public void testXXX() {
		
		
	}

	public void testSearchCars(){

	}

	@Test
	public void testGetById(){
		ResponseDTO responseDTO = carService.getById(carTest.getId());
		assertNotNull(responseDTO);

		ResponseDTO carRespDto = carService.getById(carTest.getId());
		Object car = carRespDto.getBody().getResponse();

		assertNull(car);

	}

}
