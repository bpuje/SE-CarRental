package cs425.swe.rentacar.controller;

import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.dto.ErrorDTO;
import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.exception.ValidationException;
import cs425.swe.rentacar.model.Role;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.model.UserStatus;
import cs425.swe.rentacar.security.JwtTokenProvider;
import cs425.swe.rentacar.service.UserService;
import cs425.swe.rentacar.service.utilities.HelperDTOService;
import cs425.swe.rentacar.service.utilities.ResponseService;
import cs425.swe.rentacar.utilities.LogUtilities;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/user")
@Api(tags = "USER")
public class UserController implements Constants {

    /**
     * Autowire
     **/

    private UserService service;

    private JwtTokenProvider jwtTokenProvider;


    @Autowired
    public UserController(UserService service, JwtTokenProvider jwtTokenProvider) {
        this.service = service;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    /**
     * do.Modify.User.Role
     *
     * @param users List of user
     * @return @{@link ResponseDTO}
     **/
    @RequestMapping(value = "roles/update", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseDTO doModifyUserRole(@RequestBody List<User> users, HttpServletRequest req) {
        try {
            LogUtilities.info(this.getClass().getName(), "[ctrl][user.modify.role][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

            service.doModifyUserRole(users);

            LogUtilities.info(this.getClass().getName(), "[ctrl][user.modify.role][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

            return new ResponseService(HttpStatus.OK.value(), null, null).getResponse();
        } catch (ValidationException ex) {
            LogUtilities.warn(this.getClass().getName(), "[ctrl][user.modify.role][validation][ " + ex.getMessage() + "][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
            return new ResponseService(HttpStatus.BAD_REQUEST.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.VALIDATION)).getError();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[ctrl][user.modify.role][unknown][ " + ex.getMessage() + "][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]", ex);
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ErrorDesc.CONTACT_ADMIN, ErrorType.UNKNOWN)).getError();
        }
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseDTO getAllUser(@RequestParam(defaultValue = "0") int pageno, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.get.all[ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.getAllUsers(pageno);
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.get.all][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseDTO getByUserId(@PathVariable long userId, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.get.by.id[ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.getByUserId(userId);
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.get.by.id][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/updateStatus", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseDTO updateUserStatus(@RequestBody User user, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.update.status][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.updateUserStatus(user);
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.update.status][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }

    @RequestMapping(value = "/delete/{userId}", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseDTO deleteUserById(@PathVariable long userId, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.delete.by.id][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.deleteUserById(userId);
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.delete.by.id][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('OWNER') or hasAuthority('RENTER')")
    public ResponseDTO searchUser(@RequestParam String searchString, HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.search][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        ResponseDTO responseDTO = service.searchUser(searchString);
        LogUtilities.info(this.getClass().getName(), "[ctrl][user.search][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        return responseDTO;
    }
}
