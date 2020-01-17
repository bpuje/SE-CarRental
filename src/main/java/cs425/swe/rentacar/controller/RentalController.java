package cs425.swe.rentacar.controller;

import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.dto.ErrorDTO;
import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.exception.RestrictionException;
import cs425.swe.rentacar.model.Rental;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.security.JwtTokenProvider;
import cs425.swe.rentacar.service.RentalService;
import cs425.swe.rentacar.service.utilities.ResponseService;
import cs425.swe.rentacar.utilities.LogUtilities;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/rental")
@Api(tags = "RENTAL")
public class RentalController {

    private RentalService service;

    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    public RentalController(RentalService service, JwtTokenProvider jwtTokenProvider) {
        this.service = service;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @RequestMapping(value = "/list/{userId}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO getRentalsByUser(@PathVariable long userId, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.get.by.user][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.getRentalsByUser(userId);
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.get.by.user][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseDTO getAllRental(@RequestParam(defaultValue = "0") int pageno, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.get.all][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.getAll(pageno);
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.get.all][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/list/owner/{ownerId}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO getAllRentalOwner(@RequestParam(defaultValue = "0") int pageno, @PathVariable long ownerId, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.get.all.owner][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.getByCarOwner(pageno, ownerId);
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.get.all.owner][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/list/user/{userId}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO getAllRentalUser(@RequestParam(defaultValue = "0") int pageno, @PathVariable long userId, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.get.all.user][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.getByUser(pageno, userId);
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.get.all.user][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO createRental(@RequestBody Rental rental, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][create.rental][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        try {
            ResponseDTO dto = service.createRental(rental);
            LogUtilities.info(this.getClass().getName(), "[ctrl][create.rental][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return dto;
        } catch (Exception ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][create.rental][unknown][ " + ex.getMessage() + "][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), Constants.ErrorType.VALIDATION)).getError();
        }
    }
    @RequestMapping(value = "/{rentalId}/approve", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseDTO approveRental(@PathVariable long rentalId, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][approve.rental][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        try {
            ResponseDTO dto = service.rentalApprove(rentalId);
            LogUtilities.info(this.getClass().getName(), "[ctrl][approve.rental][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return dto;
        } catch (Exception ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][approve.rental][unknown][ " + ex.getMessage() + "][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), Constants.ErrorType.VALIDATION)).getError();
        }
    }
    @RequestMapping(value = "/{rentalId}/finish", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('RENTER') or hasAuthority('OWNER')")
    public ResponseDTO finishRental(@PathVariable long rentalId, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][finish.rental][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        try {
            ResponseDTO dto = service.rentalFinish(rentalId);
            LogUtilities.info(this.getClass().getName(), "[ctrl][finish.rental][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return dto;
        } catch (Exception ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][finish.rental][unknown][ " + ex.getMessage() + "][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), Constants.ErrorType.VALIDATION)).getError();
        }
    }

    @RequestMapping(value = "/{rentalId}/reject", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('RENTER') or hasAuthority('OWNER')")
    public ResponseDTO rejectRental(@PathVariable long rentalId, @RequestParam String rejectDesc, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][reject.rental][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        try {
            ResponseDTO dto = service.rentalReject(rentalId, rejectDesc);
            LogUtilities.info(this.getClass().getName(), "[ctrl][reject.rental][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return dto;
        } catch (Exception ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][reject.rental][unknown][ " + ex.getMessage() + "][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), Constants.ErrorType.VALIDATION)).getError();
        }
    }
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO searchUser(@RequestParam String searchString, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.search][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.searchRental(searchString);
        LogUtilities.info(this.getClass().getName(), "[ctrl][rental.search][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }
}
