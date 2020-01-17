package cs425.swe.rentacar.service.impl;

import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.exception.RestrictionException;
import cs425.swe.rentacar.service.UploadService;
import cs425.swe.rentacar.utilities.LogUtilities;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class UploadServiceImpl implements Constants, UploadService {

    public String storeFile(MultipartFile file) throws IOException, RestrictionException {
        LogUtilities.info(this.getClass().getName(), "[srvc][store.file][ini]");
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new RestrictionException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = getUploadPath().resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            LogUtilities.info(this.getClass().getName(), "[srvc][store.file][end]");

            return fileName;
        } catch (IOException ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][store.file][io.error][ " + ex.getMessage() + "]");
            throw ex;
        } catch (RestrictionException ex) {
            LogUtilities.warn(this.getClass().getName(), "[srvc][store.file][validation][ " + ex.getMessage() + "]");
            throw ex;
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][store.file][unknown][ " + ex.getMessage() + "]");
            throw ex;
        }
    }

    public Path getUploadPath() throws RestrictionException {
        Path path = Paths.get(System.getProperty("user.dir") + "/upload/tmp/").toAbsolutePath().normalize();
        try {
            if(!Files.exists(path)) {
                Files.createDirectories(path);
            }
        } catch (Exception ex) {
            throw new RestrictionException("Could not create the directory where the uploaded files will be stored.");
        }
        return path;
    }
}
