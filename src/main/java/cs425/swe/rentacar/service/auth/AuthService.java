package cs425.swe.rentacar.service.auth;

import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.dto.IGeneralDTO;
import cs425.swe.rentacar.dto.LoginDTO;
import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.exception.CustomException;
import cs425.swe.rentacar.exception.NotFoundException;
import cs425.swe.rentacar.exception.RestrictionException;
import cs425.swe.rentacar.exception.ValidationException;
import cs425.swe.rentacar.model.User;
import cs425.swe.rentacar.repository.UserRepository;
import cs425.swe.rentacar.security.JwtTokenProvider;
import cs425.swe.rentacar.service.utilities.ResponseService;
import cs425.swe.rentacar.service.utilities.ValidationService;
import cs425.swe.rentacar.utilities.LogUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

/**
 * Auth Service @author Dios
 */

@Service
public class AuthService implements Constants {

    /**
     * Autowire
     **/

    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    private JwtTokenProvider jwtTokenProvider;

    private AuthenticationManager authenticationManager;

    private ValidationService validationService;

    @Autowired
    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider, AuthenticationManager authenticationManager, ValidationService validationService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
        this.validationService = validationService;
    }

    /**
     * UsernamePasswordAuthenticationToken
     * do.Login
     **/

    public ResponseDTO doSignIn(String username, String password) throws ValidationException, NotFoundException, RestrictionException {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][auth][signin][ini][" + username + "]");

            if (validationService.doValidatePassword(password)) {
                if (userRepository.existsByUserName(username)) {
                    try {
                        if (authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password)).isAuthenticated())
                            return this.doGenerate(username);
                        else {
                            throw new RestrictionException("username or password doesnt match");
                        }
                    } catch (BadCredentialsException ex) {
                        throw new RestrictionException("password doesnt match");
                    }
                } else {
                    throw new NotFoundException("user not found");
                }
            } else {
                throw new ValidationException("password length doesnt match");
            }
        } catch (ValidationException ex) {
            LogUtilities.warn(this.getClass().getName(), "[srvc][auth][signin][validation][" + ex.getMessage() + "]");
            throw ex;
        } catch (NotFoundException ex) {
            LogUtilities.warn(this.getClass().getName(), "[srvc][auth][signin][not.found][" + ex.getMessage() + "]");
            throw ex;
        } catch (RestrictionException ex) {
            LogUtilities.warn(this.getClass().getName(), "[srvc][auth][signin][restriction][" + ex.getMessage() + "]");
            throw ex;
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][auth][signin][unknown][" + ex.getMessage() + "]", ex);
            throw ex;
        }
    }


    /**
     * do.Sign.Up
     **/

    public ResponseDTO doSignUp(User user) throws CustomException, ValidationException {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][auth][signup][ini][" + user.getUserName() + "][]");
            if (validationService.doValidatePassword(user.getPassword())) {
                if (!userRepository.existsByUserName(user.getUserName())) {
                    if (!userRepository.existsByEmail(user.getEmail())) {
                        user.setPassword(passwordEncoder.encode(user.getPassword()));
                        userRepository.save(user);
                        return new ResponseService(HttpStatus.OK.value(), null, null).getResponse();
                    } else {
                        throw new CustomException("Email is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
                    }
                } else {
                    throw new CustomException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
                }
            } else {
                throw new ValidationException("password length doesnt match");
            }
        } catch (ValidationException ex) {
            LogUtilities.warn(this.getClass().getName(), "[srvc][auth][signup][validation][" + ex.getMessage() + "]");
            throw ex;
        } catch (CustomException ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][auth][signup][user.email.already.in.use][" + ex.getMessage() + "]", ex);
            throw ex;
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][auth][signup][unknown][" + ex.getMessage() + "]", ex);
            throw ex;
        }
    }

    /**
     * do.Refresh
     **/

    public ResponseDTO doRefresh(HttpServletRequest req) throws NotFoundException {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][auth][refresh][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

            if (userRepository.existsByUserName(req.getRemoteUser())) {
                String token = jwtTokenProvider.createToken(req.getRemoteUser(), userRepository.findByUserName(req.getRemoteUser()).getRoles());

                LogUtilities.info(this.getClass().getName(), "[srvc][auth][refresh][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

                return new ResponseService(HttpStatus.OK.value(), null, new LoginDTO(token, userRepository.findByUserName(req.getRemoteUser()))).getResponse();
            } else {
                throw new NotFoundException("user not found");
            }
        } catch (NotFoundException ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][auth][refresh][not.found][" + ex.getMessage() + "]", ex);
            throw ex;
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][auth][refresh][unknown][" + ex.getMessage() + "]", ex);
            throw ex;
        }
    }

    /**
     * do.Check.Who.Am.I
     **/

    public ResponseDTO doCheckWhoAmI(HttpServletRequest req) throws NotFoundException {
        try {
            LogUtilities.info(this.getClass().getName(), "[srvc][auth][who.am.i][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

            if (userRepository.existsByUserName(req.getRemoteUser())) {

                LogUtilities.info(this.getClass().getName(), "[srvc][auth][who.am.i][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");

                return new ResponseService(HttpStatus.OK.value(), null, (IGeneralDTO) userRepository.findByUserName(req.getRemoteUser())).getResponse();
            } else {
                throw new NotFoundException("user not found");
            }
        } catch (NotFoundException ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][auth][who.am.i][not.found][" + ex.getMessage() + "]", ex);
            throw ex;
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][auth][who.am.i][unknown][" + ex.getMessage() + "]", ex);
            throw ex;
        }
    }

    /**
     * do.Logout
     **/

    public void doLogout(HttpServletRequest req) {
        LogUtilities.info(this.getClass().getName(), "[srvc][auth][logout][ini][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
        LogUtilities.info(this.getClass().getName(), "[srvc][auth][logout][end][" + req.getRemoteUser() + "][" + jwtTokenProvider.resolveToken(req) + "]");
    }

    /**
     * do.Generate.Token
     **/

    private ResponseDTO doGenerate(String username) {
        try {
            User user = userRepository.findByUserName(username);
            String token = jwtTokenProvider.createToken(username, user.getRoles());
            LogUtilities.info(this.getClass().getName(), "[srvc][auth][generate.token][end][" + username + "][" + token + "][successful]");
            //removing password from returning user object
            user.setPassword(null);
            return new ResponseService(HttpStatus.OK.value(), null, new LoginDTO(token, user)).getResponse();
        } catch (Exception ex) {
            LogUtilities.fatal(this.getClass().getName(), "[srvc][auth][generate.token][unknown][" + ex.getMessage() + "]", ex);
            throw ex;
        }
    }

}
