package cs425.swe.rentacar.controller;


import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.model.Car;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.security.JwtTokenProvider;
import cs425.swe.rentacar.service.CarService;
import cs425.swe.rentacar.utilities.LogUtilities;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = {"/car"})
@Api(tags = "CAR")
public class CarController {


    private CarService carService;

    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    public CarController(CarService carService, JwtTokenProvider jwtTokenProvider) {
        this.carService = carService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @RequestMapping(value = "list/owner", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO getAllCar(@RequestParam long userId, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.by.user][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = carService.getAllCarByOwner(userId);
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.by.user][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }


    @RequestMapping(value = "/image/{imgId}", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getImageById(@PathVariable("imgId") long imgId, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.img.by.id][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        try {
            byte[] file = carService.getImageById(imgId);
            LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.img.by.id][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return file;
        } catch (IOException e) {
            LogUtilities.fatal(this.getClass().getName(), "[ctrl][car.get.img.by.id][error][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]", e);
            return null;
        }
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
//    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO getAll(@RequestParam(defaultValue = "0") int pageno, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.all][ini]");
        ResponseDTO responseDTO = carService.getAll(pageno);
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.all][end]");
        return responseDTO;
    }

    @PostMapping("/register")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER')")
    public ResponseDTO registerCar(@RequestBody Car car, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.save][ini2][" + jwtTokenProvider.resolveToken(req) + "]");
        LogUtilities.info(this.getClass().getName(), car.toString());
        ResponseDTO responseDTO = carService.save(car);
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.save][end][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO getAllCar(@PathVariable Long id, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.by.id][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = carService.getById(id);
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.by.id][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @PostMapping("/update")
    public ResponseDTO updateCar(@RequestBody Car car, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.update.by.id][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = carService.updateCar(car);
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.update.by.id][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER')")
    public ResponseDTO deleteCar(@PathVariable Long id, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.delete.by.id][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = carService.deleteCarById(id);
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.delete.by.id][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO findCars(@RequestParam String searchString, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.search][ini][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = carService.searchCars(searchString);
        LogUtilities.info(this.getClass().getName(), "[ctrl][car.get.search][end][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }


}
