package cs425.swe.rentacar.service.impl;

import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.dto.BodyDTO;
import cs425.swe.rentacar.dto.ErrorDTO;
import cs425.swe.rentacar.dto.ListDTO;
import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.exception.RestrictionException;
import cs425.swe.rentacar.exception.ValidationException;
import cs425.swe.rentacar.model.*;
import cs425.swe.rentacar.repository.CarRepository;
import cs425.swe.rentacar.repository.RentalRepository;
import cs425.swe.rentacar.repository.UserRepository;
import cs425.swe.rentacar.security.JwtTokenProvider;
import cs425.swe.rentacar.service.RentalService;
import cs425.swe.rentacar.service.UserService;
import cs425.swe.rentacar.service.utilities.HelperDTOService;
import cs425.swe.rentacar.service.utilities.HelperService;
import cs425.swe.rentacar.service.utilities.ResponseService;
import cs425.swe.rentacar.utilities.LogUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RentalServiceImpl implements Constants, RentalService {

    /**
     * Autowire
     **/

    private RentalRepository repository;

    private CarRepository carRepository;

    private HelperDTOService helperDTOService;


    @Autowired
    public RentalServiceImpl(RentalRepository repository,
                             CarRepository carRepository,
                             HelperDTOService helperDTOService) {
        this.repository = repository;
        this.carRepository = carRepository;
        this.helperDTOService = helperDTOService;
    }

    public ResponseDTO getRentalsByUser(long userId) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][rental.get.by.user][ini]");
            List<Rental> rentals = repository.findByCarOwnerId(userId);
            LogUtilities.info(this.getClass().getName(), "[srvc][rental.get.by.user][end]");
            return new ResponseService(HttpStatus.OK.value(), null, new ListDTO<>(rentals)).getResponse();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][rental.get.by.user][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    public ResponseDTO getAll(int pageno) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][rental.get.all][ini]");
            Page<Rental> rentals = repository.findAll(PageRequest.of(pageno, 3, Sort.by("createDate")));
            LogUtilities.info(this.getClass().getName(), "[srvc][rental.get.all][end]");
            return new ResponseService(HttpStatus.OK.value(), null, helperDTOService.getPaginationDTO(rentals)).getResponse();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][rental.get.all][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }
    public ResponseDTO getByCarOwner(int pageno, long ownerId) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][rental.get.all.owner][ini]");
            Page<Rental> rentals = repository.findByCarOwnerId(ownerId, PageRequest.of(pageno, 5, Sort.by(Sort.Order.desc("status"),Sort.Order.desc("createDate"))));
            LogUtilities.info(this.getClass().getName(), "[srvc][rental.get.all.owner][end]");
            return new ResponseService(HttpStatus.OK.value(), null, helperDTOService.getPaginationDTO(rentals)).getResponse();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][rental.get.all.owner][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }
    public ResponseDTO getByUser(int pageno, long ownerId) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][rental.get.by.user][ini]");
            Page<Rental> rentals = repository.findByUserId(ownerId, PageRequest.of(pageno, 5, Sort.by(Sort.Order.desc("status"),Sort.Order.desc("createDate"))));
            LogUtilities.info(this.getClass().getName(), "[srvc][rental.get.by.user][end]");
            return new ResponseService(HttpStatus.OK.value(), null, helperDTOService.getPaginationDTO(rentals)).getResponse();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][rental.get.by.user][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    public ResponseDTO createRental(Rental rental) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][create.rental][ini]");
            if(rental.getCar().getAvailable()) {
                rental.setStatus(RentalStatus.PENDING);
                Car car = carRepository.getById(rental.getCar().getId());
                car.setAvailable(false);
                rental.setCar(car);
                carRepository.save(car);
                repository.save(rental);
                LogUtilities.info(this.getClass().getName(), "[srvc][create.rental][end]");
                return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, null).getResponse();
            }
            else{
                LogUtilities.info(this.getClass().getName(), "[srvc][create.rental][not.available][end]");
                return new ResponseService(HttpStatus.BAD_REQUEST.value(), "This car is not available",  new ErrorDTO(null, "This car is not available", ErrorType.RESTRICTION)).getResponse();
            }
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][create.rental][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    public ResponseDTO rentalApprove(long rentalId) {
        LogUtilities.info(this.getClass().getName(), "[srvc][rental.approve][ini]");
        try {
            Optional<Rental> tmp = repository.findById(rentalId);
            if (tmp.isPresent()) {
                Rental rental = tmp.get();
                rental.setStatus(RentalStatus.APPROVED);
                rental.setApprovalDate(LocalDate.now());
                repository.save(rental);
                LogUtilities.info(this.getClass().getName(), "[srvc][rental.approve][end]");
                return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, null).getResponse();
            } else {
                LogUtilities.error(this.getClass().getName(), "[srvc][rental.approve][not.found]");
                return new ResponseService(HttpStatus.NOT_FOUND.value(), null, new ErrorDTO(null, "NOT FOUND", ErrorType.NOT_FOUND)).getError();
            }
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][rental.approve][unknown][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    public ResponseDTO rentalFinish(long rentalId) {
        LogUtilities.info(this.getClass().getName(), "[srvc][rental.finish][ini]");
        try {
            Optional<Rental> tmp = repository.findById(rentalId);
            if (tmp.isPresent()) {
                Rental rental = tmp.get();
                rental.setStatus(RentalStatus.RETURNED);
                rental.setReturnDate(LocalDate.now());
                Car car = carRepository.getById(rental.getCar().getId());
                car.setAvailable(true);
                rental.setCar(car);
                carRepository.save(car);
                repository.save(rental);
                LogUtilities.info(this.getClass().getName(), "[srvc][rental.approve][end]");
                return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, null).getResponse();
            } else {
                LogUtilities.error(this.getClass().getName(), "[srvc][rental.approve][not.found]");
                return new ResponseService(HttpStatus.NOT_FOUND.value(), null, new ErrorDTO(null, "NOT FOUND", ErrorType.NOT_FOUND)).getError();
            }
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][rental.finish][unknown][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    public ResponseDTO rentalReject(long rentalId, String rejectDesc) {
        LogUtilities.info(this.getClass().getName(), "[srvc][rental.finish][ini]");
        try {
            Optional<Rental> tmp = repository.findById(rentalId);
            if (tmp.isPresent()) {
                Rental rental = tmp.get();
                rental.setStatus(RentalStatus.DECLINED);
                rental.setDeclineDesc(rejectDesc);
                rental.setDeclinedDate(LocalDate.now());
                Car car = rental.getCar();
                car.setAvailable(false);
                carRepository.save(car);
                repository.save(rental);
                LogUtilities.info(this.getClass().getName(), "[srvc][rental.approve][end]");
                return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, null).getResponse();
            } else {
                LogUtilities.error(this.getClass().getName(), "[srvc][rental.approve][not.found]");
                return new ResponseService(HttpStatus.NOT_FOUND.value(), null, new ErrorDTO(null, "NOT FOUND", ErrorType.NOT_FOUND)).getError();
            }
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][rental.finish][unknown][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    public ResponseDTO searchRental(String searchString) {
        LogUtilities.info(this.getClass().getName(), "[srvc][user.search][ini]");
        try {
            List<Rental> users = repository.findByUserUserNameContainingOrCarModelContaining(searchString, searchString);
            LogUtilities.info(this.getClass().getName(), "[srvc][user.search][end]");
            return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, new ListDTO<>(users)).getResponse();
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][user.search][unknown][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }
}
