package cs425.swe.rentacar.service;

import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.exception.ValidationException;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.model.UserStatus;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface UserService {
	/**
	 * Search user on First name, Last name, Email and User name fields
	 * @param searchString
	 * @return {ResponseDTO}
	 */
	ResponseDTO searchUser(String searchString);

	/**
	 * Retrive list of user with paging
	 * @param pageno
	 * @return {ResponseDTO}
	 */
    ResponseDTO getAllUsers(int pageno);

    void doModifyUserRole(List<User> users) throws ValidationException;

	/**
	 * Get user by id
	 *
	 * @param id
	 * @return ResponseDTO
	 */
    ResponseDTO getByUserId(Long id);
	/**
	 * Update status of a user - normally for block / unblock user
	 *
	 * @param user
	 * @return ResponseDTO
	 */
	ResponseDTO updateUserStatus(User user);
    ResponseDTO deleteUserById(long userId);
}
