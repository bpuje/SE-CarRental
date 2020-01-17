package cs425.swe.rentacar.service.impl;

import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.dto.*;
import cs425.swe.rentacar.exception.ValidationException;
import cs425.swe.rentacar.model.Role;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.repository.UserRepository;
import cs425.swe.rentacar.service.UserService;
import cs425.swe.rentacar.service.utilities.HelperDTOService;
import cs425.swe.rentacar.service.utilities.ResponseService;
import cs425.swe.rentacar.utilities.LogUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements Constants, UserService {

    /**
     * Autowire
     **/

    private UserRepository repository;

    private HelperDTOService helperDTOService;


    @Autowired
    public UserServiceImpl(UserRepository repository,
                           HelperDTOService helperDTOService) {
        this.repository = repository;
        this.helperDTOService = helperDTOService;
    }

    /**
     * do.Modify.User.Role
     **/
    public void doModifyUserRole(List<User> users) throws ValidationException {
        LogUtilities.info(this.getClass().getName(), "[srvc][user.modify.role][ini]");
        try {
            if (users.size() > 0) {
                for (User user : users) {
                    List<Role> roles = user.getRoles();
                    user = repository.findByUserName(user.getUserName());
                    user.setRoles(roles);
//                        user.setUpdatedAt(new Date());
                    repository.save(user);
                }
            } else {
                throw new ValidationException("no.users");
            }

            LogUtilities.info(this.getClass().getName(), "[srvc][user.modify.role][end]");
        } catch (ValidationException ex) {
            LogUtilities.warn(this.getClass().getName(), "[srvc][user.modify.role][validation][ " + ex.getMessage() + "]");
            throw ex;
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][user.modify.role][unknown][ " + ex.getMessage() + "]");
            throw ex;
        }
    }

    /**
     * Get all user with paging
     **/
    public ResponseDTO getAllUsers(int pageno) {
        LogUtilities.info(this.getClass().getName(), "[srvc][user.get.all][ini]");
        try {
            Page<User> users = repository.findAll(PageRequest.of(pageno, 3, Sort.by("userName")));
            LogUtilities.info(this.getClass().getName(), "[srvc][user.get.all][end]");
            return new ResponseService(HttpStatus.OK.value(), null, helperDTOService.getPaginationDTO(users)).getResponse();
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][user.get.all][unknown][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    /**
     * get.by.user.id
     **/
    public ResponseDTO getByUserId(Long id) {
        LogUtilities.info(this.getClass().getName(), "[srvc][user.get.all][ini]");
        try {
            Optional<User> user = repository.findById(id);
            if (user.isPresent()) {
                LogUtilities.info(this.getClass().getName(), "[srvc][user.get.all][end]");
                return new ResponseService(HttpStatus.OK.value(), null, new ObjectDTO(user.get())).getResponse();
            } else {
                LogUtilities.error(this.getClass().getName(), "[srvc][user.get.all][not.found]");
                return new ResponseService(HttpStatus.NOT_FOUND.value(), null, new ErrorDTO(null, "NOT FOUND", ErrorType.NOT_FOUND)).getError();
            }
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][user.get.all][unknown][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    /**
     * update.user.status
     **/
    public ResponseDTO updateUserStatus(User user) {
        LogUtilities.info(this.getClass().getName(), "[srvc][user.update.status][ini]");
        try {
            repository.save(user);
            LogUtilities.info(this.getClass().getName(), "[srvc][user.update.status][end]");
            return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, null).getResponse();
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][user.update.status][unknown][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    /**
     * delete.user.by.id
     **/
    public ResponseDTO deleteUserById(long userId) {
        LogUtilities.info(this.getClass().getName(), "[srvc][user.delete.by.id][ini]");
        try {
            repository.deleteById(userId);
            LogUtilities.info(this.getClass().getName(), "[srvc][user.delete.by.id][end]");
            return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, null).getResponse();
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][user.delete.by.id][unknown][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }

    public ResponseDTO searchUser(String searchString) {
        LogUtilities.info(this.getClass().getName(), "[srvc][user.search][ini]");
        try {
            List<User> users = repository.findByUserNameContainingOrEmailContainingOrFirstNameContainingOrLastNameContaining(searchString, searchString, searchString, searchString);
            LogUtilities.info(this.getClass().getName(), "[srvc][user.search][end]");
            return new ResponseService(HttpStatus.OK.value(), Status.SUCCESS, new ListDTO<>(users)).getResponse();
        } catch (Exception ex) {
            LogUtilities.error(this.getClass().getName(), "[srvc][user.search][unknown][ " + ex.getMessage() + "]");
            return new ResponseService(HttpStatus.INTERNAL_SERVER_ERROR.value(), null, new ErrorDTO(null, ex.getMessage(), ErrorType.UNKNOWN)).getError();
        }
    }
}
