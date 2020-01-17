package cs425.swe.rentacar.controller;


import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.dto.ErrorDTO;
import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.exception.CustomException;
import cs425.swe.rentacar.exception.NotFoundException;
import cs425.swe.rentacar.exception.RestrictionException;
import cs425.swe.rentacar.exception.ValidationException;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.security.JwtTokenProvider;
import cs425.swe.rentacar.service.auth.AuthService;
import cs425.swe.rentacar.service.utilities.ResponseService;
import cs425.swe.rentacar.utilities.LogUtilities;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

/**
 * Authentication Controller @author Dios
 */

@RestController
@RequestMapping("/auth")
@Api(tags = "AUTHENTICATION")
public class AuthController implements Constants {

    /**
     * Autowire
     **/

    @Autowired
    AuthService service;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    /**
     * do.Login
     **/

    @RequestMapping(value = "signin", method = RequestMethod.POST)
    public ResponseDTO doSignIn(@RequestBody HashMap<String, String> map) {
        try {

            LogUtilities.info(this.getClass().getName(), "[ctrl][auth][login][ini][" + map.get("username") + "]");

            ResponseDTO responseDTO = service.doSignIn(map.get("username"), map.get("password"));

            LogUtilities.info(this.getClass().getName(), "[ctrl][auth][login][end][" + map.get("username") + "]");

            return responseDTO;

        } catch (ValidationException ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][auth][login][validation][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.BAD_REQUEST.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.VALIDATION)).getError();
        } catch (NotFoundException ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][auth][login][not.found][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.NOT_FOUND.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.NOT_FOUND)).getError();
        } catch (RestrictionException ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][auth][login][restriction][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.BAD_REQUEST.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.RESTRICTION)).getError();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[ctrl][auth][login][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    /**
     * do.Refresh
     **/
    @RequestMapping(value = "refresh", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('Admin') or  hasAuthority('CarOwner')  or  hasAuthority('CarRenter')")
    public ResponseDTO doRefresh(HttpServletRequest req) {
        try {
            LogUtilities.info(this.getClass().getName(), "[ctrl][auth][refresh][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

            ResponseDTO responseDTO = service.doRefresh(req);

            LogUtilities.info(this.getClass().getName(), "[ctrl][auth][refresh][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

            return responseDTO;

        } catch (NotFoundException ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][auth][refresh][not.found][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.NOT_FOUND.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.NOT_FOUND)).getError();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[ctrl][auth][refresh][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    /**
     * do.Check.Who.Am.I
     **/

    @RequestMapping(value = "check", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('Admin') or  hasAuthority('CarOwner')  or  hasAuthority('CarRenter')")
    public ResponseDTO doCheckWhoAmI(HttpServletRequest req) {
        try {
            LogUtilities.info(this.getClass().getName(), "[ctrl][auth][who.am.i][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

            ResponseDTO responseDTO = service.doCheckWhoAmI(req);

            LogUtilities.info(this.getClass().getName(), "[ctrl][auth][who.am.i][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

            return responseDTO;

        } catch (NotFoundException ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][auth][who.am.i][not.found][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.NOT_FOUND.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.NOT_FOUND)).getError();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[ctrl][auth][who.am.i][unknown][ " + ex.getMessage() + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    /**
     * do.Signup
     **/

    @RequestMapping(value = "signup", method = RequestMethod.POST)
    public ResponseDTO doSignUp(@RequestBody User user, HttpServletRequest req) {
        try {
            LogUtilities.info(this.getClass().getName(), "[ctrl][auth][signup][" + user.getUserName() + "][ini]");

            ResponseDTO responseDTO = service.doSignUp(user);

            LogUtilities.info(this.getClass().getName(), "[ctrl][auth][signup][" + user.getUserName() + "][end]");

            return responseDTO;

        } catch (CustomException ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][auth][signup][custom.exception][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.UNPROCESSABLE_ENTITY.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.VALIDATION)).getError();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[ctrl][auth][signup][unknown]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ErrorDesc.CONTACT_ADMIN, ErrorType.UNKNOWN)).getError();
        }
    }

    /**
     * do.Logout
     **/

    @RequestMapping(value = "signout", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('Admin') or  hasAuthority('CarOwner')  or  hasAuthority('CarRenter')")
    public void doLogout(HttpServletRequest req) {

        LogUtilities.info(this.getClass().getName(), "[ctrl][auth][logout][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        service.doLogout(req);
        LogUtilities.info(this.getClass().getName(), "[ctrl][auth][logout][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

    }

}
