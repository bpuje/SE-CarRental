//package cs425.swe.rentacar.service;
//
//import cs425.swe.rentacar.dto.ResponseDTO;
//import cs425.swe.rentacar.exception.ValidationException;
//import cs425.swe.rentacar.model.User;
//import cs425.swe.rentacar.model.UserStatus;
//
//import org.springframework.data.domain.Page;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import javax.servlet.http.HttpServletRequest;
//import java.util.List;
//
//public interface UserService2bk {
//	/**
//	 * Retrive list of user with paging
//	 * @param pageNo
//	 * @return
//	 */
//	Page<User> getAllUsers(int pageNo);
//	
//	/**
//	 * Update status of a user - normally for block / unblock user
//	 * 
//	 * @param userId
//	 * @param status
//	 * @return
//	 */
//	User updateUserStatus(long userId, UserStatus status);
//	
//    ResponseDTO getAllUsers(HttpServletRequest req);
//    
//    ResponseDTO searchUsers(String term);
//    
//    void doModifyUserRole(List<User> users, HttpServletRequest req) throws ValidationException;
//    ResponseDTO getByUserId(Long id,HttpServletRequest req);
//    ResponseDTO updateUserStatus(User user, UserStatus status, HttpServletRequest req);
//    ResponseDTO deleteUserById(long userId, HttpServletRequest req);
//}
