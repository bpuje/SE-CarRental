package cs425.swe.rentacar.service;

import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.exception.RestrictionException;
import cs425.swe.rentacar.model.Car;
import cs425.swe.rentacar.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;

public interface UploadService {
    String storeFile(MultipartFile file) throws IOException, RestrictionException;
    Path getUploadPath() throws RestrictionException;
}
