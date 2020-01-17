package cs425.swe.rentacar.service;

import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.model.Car;
import cs425.swe.rentacar.model.User;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

public interface CarService {
    ResponseDTO getAll(int pageno);
    ResponseDTO getAllCarByOwner(long userId);
    ResponseDTO getById(Long id);
    ResponseDTO save(Car car);
    ResponseDTO updateCar(Car car);
    ResponseDTO deleteCarById(Long carId);
    ResponseDTO searchCars(String searchString);
    byte[] getImageById(long imgId) throws IOException;

}
