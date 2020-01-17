package cs425.swe.rentacar.service.impl;


import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.dto.*;
import cs425.swe.rentacar.exception.RestrictionException;
import cs425.swe.rentacar.model.Car;
import cs425.swe.rentacar.model.Image;
import cs425.swe.rentacar.repository.CarRepository;
import cs425.swe.rentacar.repository.ImageRepository;
import cs425.swe.rentacar.service.CarService;
import cs425.swe.rentacar.service.utilities.HelperDTOService;
import cs425.swe.rentacar.service.utilities.ResponseService;
import cs425.swe.rentacar.utilities.LogUtilities;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImpl implements Constants, CarService {

    private CarRepository carRepository;

    private ImageRepository imageRepository;

    private HelperDTOService helperDTOService;

    @Autowired
    public CarServiceImpl(CarRepository carRepository, ImageRepository imageRepository, HelperDTOService helperDTOService) {
        this.carRepository = carRepository;
        this.imageRepository = imageRepository;
        this.helperDTOService = helperDTOService;
    }

    @Override
    public ResponseDTO getAllCarByOwner(long userId) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][car.get.by.user][ini]");
            List<Car> cars = carRepository.findByOwnerId(userId);
            LogUtilities.info(this.getClass().getName(), "[srvc][car.get.by.user][end]");
            return new ResponseService(HttpStatus.OK.value(), null, new ListDTO<>(cars)).getResponse();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][car.get.by.user][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    @Override
    public ResponseDTO getAll(int pageno) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][car.get.all][ini]");
            if (pageno == -1) {
                List<Car> cars = carRepository.findAll();
                LogUtilities.info(this.getClass().getName(), "[srvc][car.get.all][list][end]");
                return new ResponseService(HttpStatus.OK.value(), null, new ListDTO<>(cars)).getResponse();
            } else {
                Page<Car> cars = carRepository.findAll(PageRequest.of(pageno, 3, Sort.by("price")));
                LogUtilities.info(this.getClass().getName(), "[srvc][car.get.all][page][end]");
                return new ResponseService(HttpStatus.OK.value(), null, helperDTOService.getPaginationDTO(cars)).getResponse();
            }
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][car.get.all][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }

    }

    @Override
    public ResponseDTO getById(Long id) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][car.get.by.id][ini]");
            Optional<Car> tmp = carRepository.findById(id);
            if (tmp.isPresent()) {
                LogUtilities.info(this.getClass().getName(), "[srvc][car.get.by.id][end]");
                return new ResponseService(HttpStatus.OK.value(), null, new ObjectDTO(tmp.get())).getResponse();
            } else {
                LogUtilities.error(this.getClass().getName(), "[srvc][car.get.by.id][not.found]");
                return new ResponseService(HttpStatus.NOT_FOUND.value(), null, new ErrorDTO(null, "NOT FOUND", ErrorType.NOT_FOUND)).getError();
            }
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][car.get.by.id][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    @Override
    public ResponseDTO updateCar(Car car) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][update.car][ini]");
            carRepository.save(car);
            LogUtilities.info(this.getClass().getName(), "[srvc][update.car][end]");
            return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, null).getResponse();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][update.car][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    public byte[] getImageById(long imgId) throws IOException {
        LogUtilities.info(this.getClass().getName(), "[srvc][post.get.img.by.id][ini]");
        Optional<Image> img = imageRepository.findById(imgId);
        try {
            if (img.isPresent()) {
                InputStream in = new FileInputStream(System.getProperty("user.dir") + "/upload/save/"
                        + img.get().getCar().getOwner().getId() + "/"
                        + img.get().getCar().getId() + "/"
                        + img.get().getId() + "."
                        + img.get().getExt());
                LogUtilities.info(this.getClass().getName(), "[srvc][post.get.img.by.id][end]");
                return IOUtils.toByteArray(in);
            } else {
                LogUtilities.warn(this.getClass().getName(), "[srvc][post.get.img.by.id][Image.Not.Found]");
                throw new FileNotFoundException("Image not found");
            }
        } catch (IOException ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][post.get.img.by.id][io]", ex);
            throw ex;
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][post.get.img.by.id][unknown]", ex);
            throw ex;
        }
    }

    @Override
    public ResponseDTO save(Car car) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][save.car][ini]");
            List<Image> images = car.getImages();
            List<Image> tmpImages = new ArrayList<>();
            car.setImages(null);
            carRepository.save(car);
            for (Image tmp : images) {
                LogUtilities.info(this.getClass().getName(), "[srvc][save.car.imgSave][ini]");
                String[] a = tmp.getName().split("\\.");
                Image img = new Image(tmp.getSize(), tmp.getName(), a[1], car);
                imageRepository.save(img);
                tmpImages.add(img);
                LogUtilities.info(this.getClass().getName(), "[srvc][save.car.imgSave][ini]");
                Path saveDir = Paths.get(System.getProperty("user.dir") + "/upload/save/" + car.getOwner().getId());
                LogUtilities.info(this.getClass().getName(), "[srvc][post.doAddPost.createPath][ini]");
                try {
                    if (!Files.exists(saveDir)) {
                        Files.createDirectories(saveDir);
                    }
                    saveDir = Paths.get(System.getProperty("user.dir") + "/upload/save/" + car.getOwner().getId() + "/" + car.getId());
                    if (!Files.exists(saveDir)) {
                        Files.createDirectories(saveDir);
                    }
                } catch (Exception ex) {
                    LogUtilities.fatal(this.getClass().getName(), "[srvc][save.car.createPath][unknown]", ex);
                    throw new RestrictionException("Could not create the directory where the images will be stored.");
                }
                Files.copy(Paths.get(System.getProperty("user.dir") + "/upload/tmp/"
                                + img.getName()).toAbsolutePath().normalize(),
                        Paths.get(saveDir.toAbsolutePath() + "/"
                                + img.getId() + "."
                                + img.getExt()).toAbsolutePath().normalize());
                LogUtilities.info(this.getClass().getName(), "[srvc][save.car.createPath][end]");
            }
            car.setImages(tmpImages);
            carRepository.save(car);
            LogUtilities.info(this.getClass().getName(), "[srvc][save.car][end]");
            return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, null).getResponse();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][save.car][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }


    @Override
    public ResponseDTO deleteCarById(Long carId) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][delete.car][ini]");
            carRepository.deleteById(carId);
            LogUtilities.info(this.getClass().getName(), "[srvc][delete.car][end]");
            return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, null).getResponse();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][delete.car][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }


    @Override
    public ResponseDTO searchCars(String searchString) {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][search.car][ini]");
            if (containsDecimalPoint(searchString) && isResult(searchString)) {
                LogUtilities.info(this.getClass().getName(), "[srvc][search.car][double][end]");
                return new ResponseService(HttpStatus.OK.value(),
                        null,
                        new ListDTO<>(carRepository.findAllByPriceEquals(Double.parseDouble(searchString)))).getResponse();
            } else if (isSeats(searchString)) {
                LogUtilities.info(this.getClass().getName(), "[srvc][search.car][integer][end]");
                return new ResponseService(HttpStatus.OK.value(),
                        null,
                        new ListDTO<>(carRepository.findAllBySeatsEqualsOrYearEquals(Integer.parseInt(searchString), Integer.parseInt(searchString)))).getResponse();
            } else {
                LogUtilities.info(this.getClass().getName(), "[srvc][search.car][string][end]");
                return new ResponseService(HttpStatus.OK.value(),
                        null,
                        new ListDTO<>(carRepository.findAllByCarBrandContainingOrModelContainingOrDescriptionContainingOrderByDescription(searchString, searchString, searchString))).getResponse();
            }
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][search.car][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }


    private boolean isResult(String searchString) {
        boolean isParseableAsResult = false;
        try {
            Double.parseDouble(searchString);
            isParseableAsResult = true;
        } catch (Exception e) {
            if (e instanceof ParseException) {
                isParseableAsResult = false;
            }
        }
        return isParseableAsResult;
    }

    private boolean isSeats(String searchString) {
        try {
            Integer.parseInt(searchString);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private boolean containsDecimalPoint(String searchString) {
        return searchString.contains(".");
    }


}
