package cs425.swe.rentacar.service;

import cs425.swe.rentacar.dto.ResponseDTO;
import cs425.swe.rentacar.model.Rental;
import cs425.swe.rentacar.model.User;

import javax.servlet.http.HttpServletRequest;

public interface RentalService {
    /**
     * Search from rental
     *
     * @param searchString {@link String}
     * @return cs425.swe.rentacar.dto.ResponseDTO
     */
    ResponseDTO searchRental(String searchString);

    /**
     * Retrive list of rentals by user with paging
     *
     * @param userId {@link Long}
     * @return cs425.swe.rentacar.dto.ResponseDTO
     */
    ResponseDTO getRentalsByUser(long userId);

    /**
     * Retrive list of rentals with paging
     *
     * @param pageno {@link Integer}
     * @return cs425.swe.rentacar.dto.ResponseDTO
     */
    ResponseDTO getAll(int pageno);

    /**
     * Retrieve list of rentals with paging by car owner (sorted by status and createDate)
     *
     * @param pageno {@link Integer}
     * @param ownerId {@link Long}
     * @return cs425.swe.rentacar.dto.ResponseDTO
     */
    ResponseDTO getByCarOwner(int pageno, long ownerId);

    /**
     * Retrieve list of rentals with paging by user (sorted by status and createDate)
     *
     * @param pageno {@link Integer}
     * @param ownerId {@link Long}
     * @return cs425.swe.rentacar.dto.ResponseDTO
     */
    ResponseDTO getByUser(int pageno, long ownerId);

    /**
     * Create rental
     *
     * @param rental {@link Rental}
     * @return cs425.swe.rentacar.dto.ResponseDTO
     */
    ResponseDTO createRental(Rental rental);

    /**
     * Approve rental
     *
     * @param rentalId {@link Long}
     * @return cs425.swe.rentacar.dto.ResponseDTO
     */
    ResponseDTO rentalApprove(long rentalId);

    /**
     * Finish rental
     *
     * @param rentalId {@link Long}
     * @return cs425.swe.rentacar.dto.ResponseDTO
     */
    ResponseDTO rentalFinish(long rentalId);

    /**
     * Reject rental
     *
     * @param rentalId {@link Long}
     * @return cs425.swe.rentacar.dto.ResponseDTO
     */
    ResponseDTO rentalReject(long rentalId, String rejectDesc);
}
