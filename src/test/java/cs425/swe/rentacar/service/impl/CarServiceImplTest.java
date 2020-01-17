package cs425.swe.rentacar.service.impl;

import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.model.Car;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.repository.CarRepository;
import cs425.swe.rentacar.service.CarService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(MockitoJUnitRunner.class)
public class CarServiceImplTest {

    @Autowired
    private CarService carService;

    @Mock
    private CarRepository repository;

    @Mock
    private User user;

    @Mock
    private Car car;


    @Before
    public void setUp() throws Exception {
        Mockito.when(user.getId()).thenReturn((long) 1);
//        List<Car>
//        Mockito.when(repository.findByOwnerId(1)).thenReturn();
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void getAllCarByOwner() {
        ResponseDTO responseDTO = carService.getAllCarByOwner( 1);
//        assertEquals((List<Car>)responseDTO.getBody().getResponse());
    }

    @Test
    public void getAll() {
    }

    @Test
    public void getById() {
    }

    @Test
    public void updateCar() {
    }

    @Test
    public void save() {
    }

    @Test
    public void deleteCarById() {
    }

    @Test
    public void searchCars() {
    }
}
