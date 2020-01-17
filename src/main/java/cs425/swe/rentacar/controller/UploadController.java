package cs425.swe.rentacar.controller;

import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.dto.ListDTO;
import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.dto.UploadDTO;
import cs425.swe.rentacar.exception.RestrictionException;
import cs425.swe.rentacar.security.JwtTokenProvider;
import cs425.swe.rentacar.service.UploadService;
import cs425.swe.rentacar.service.utilities.ResponseService;
import cs425.swe.rentacar.utilities.LogUtilities;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Upload Controller @author Dios
 */

@RestController
@RequestMapping("/upload")
@Api(tags = "UPLOAD")
public class UploadController implements Constants {

    private UploadService service;

    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    public UploadController(UploadService service, JwtTokenProvider jwtTokenProvider) {
        this.service = service;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @RequestMapping(value = "uploadFile", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN') or  hasAuthority('OWNER') or  hasAuthority('RENTER')")
    public UploadDTO uploadFile(@RequestParam("file") MultipartFile file, HttpServletRequest req) throws IOException, RestrictionException {
        try {
            LogUtilities.info(this.getClass().getName(), "[ctrl][upload][uploadFile][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            String fileName = service.storeFile(file);
            LogUtilities.info(this.getClass().getName(), "[ctrl][upload][uploadMultipleFiles][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

            return new UploadDTO(fileName, file.getContentType(), file.getSize());
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[ctrl][upload][uploadFile][unknown][ " + ex.getMessage() + "]", ex);
            throw ex;
        }
    }

    @RequestMapping(value = "uploadMultipleFiles", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN') or  hasAuthority('OWNER') or  hasAuthority('RENTER')")
    public ResponseDTO uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][upload][uploadMultipleFiles][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        List<UploadDTO> list = Arrays.stream(files)
                .map(file -> {
                    try {
                        LogUtilities.info(this.getClass().getName(), "[ctrl][upload][uploadMultipleFiles][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
                        return uploadFile(file, req);
                    } catch (IOException ex) {
                        LogUtilities.warn(this.getClass().getName(), "[ctrl][upload][uploadMultipleFiles][io.warn][ " + ex.getMessage() + "]");
                    } catch (RestrictionException ex) {
                        LogUtilities.fatal(this.getClass().getName(), "[ctrl][upload][uploadMultipleFiles][unknown][ " + ex.getMessage() + "]", ex);
                    }
                    return null;
                })
                .collect(Collectors.toList());
        LogUtilities.info(this.getClass().getName(), "[ctrl][upload][uploadMultipleFiles][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return new ResponseService(HttpStatus.OK.value(), null, new ListDTO<>(list)).getResponse();
    }
}
