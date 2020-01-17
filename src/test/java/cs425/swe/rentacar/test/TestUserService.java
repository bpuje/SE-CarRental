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

import cs425.swe.rentacar.dto.ObjectDTO;
import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.model.UserStatus;
import cs425.swe.rentacar.repository.UserRepository;
import cs425.swe.rentacar.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestUserService {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepo;
	
	private User userTest;
	
	@Before
	public void setup() {
		userTest = new User("u-test-1001", "u-test-1001@gmail.ux", "u-test", "-001");
		userTest.setStatus(UserStatus.Active);
		userTest.setPassword("pwr-pss-aha");

		try {
			userTest = userRepo.saveAndFlush(userTest);
		} catch(Exception ex) { 
			ex.printStackTrace();
		}

		try {
			userTest = userRepo.saveAndFlush(userTest);
		} catch(Exception ex) { }
	}
	
	@After
	public void teardown() {
		try {
			userRepo.delete(userTest);
		} catch(Exception ex) { }
	}

	@Test
	public void testBlockUser() {
		
		User user = userRepo.findByUserName(userTest.getUserName());
		
		assertEquals(UserStatus.Active, user.getStatus());
		
		user.setStatus(UserStatus.Blocked);
		userService.updateUserStatus(user);
		
		user = userRepo.findByUserName(userTest.getUserName());

		assertEquals(UserStatus.Blocked, user.getStatus());
	}
	
	@Test
	public void testFindUserById() {
		ResponseDTO respDto = userService.getByUserId(userTest.getId());
		assertNotNull(respDto);
		
		ResponseDTO userRespDto = userService.getByUserId(userTest.getId());
		
		// User user = (User)userRespDto.getBody().getResponse();
		
		ObjectDTO userDTO = (ObjectDTO)userRespDto.getBody().getResponse();
		User user = (User) userDTO.getObject();
	 
		assertNotNull(user);
		
		assertEquals(userTest.getUserName(), user.getUserName());
	}
	
	@Test
	public void testDeleteUserById() {
		ResponseDTO respDto = userService.deleteUserById(userTest.getId());
		assertNotNull(respDto);
		
		ResponseDTO userRespDto = userService.getByUserId(userTest.getId());
		
		Object user = userRespDto.getBody().getResponse();
	 
		assertNull(user);
	}



}
