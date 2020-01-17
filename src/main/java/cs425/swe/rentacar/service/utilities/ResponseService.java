package cs425.swe.rentacar.service.utilities;

import cs425.swe.rentacar.constant.Constants;
import cs425.swe.rentacar.dto.IGeneralDTO;
import cs425.swe.rentacar.dto.ResponseDTO;

import java.util.List;

/**
 * Response Service @author Dios
 */

public class ResponseService implements Constants {

    /**
     * DTO
     **/

    private IGeneralDTO dto;

    private ResponseDTO responseDTO;

    /**
     * Constructor
     **/

    public ResponseService(int code, String message, IGeneralDTO contentDTO) {
        this.getResponseDTO().getHeader().setCode(code);
        this.getResponseDTO().getHeader().setStatus(code == 200 ? Status.SUCCESS : Status.FAILED);
        this.getResponseDTO().getHeader().setMessage(message);
        dto = contentDTO;
    }

    /**
     * Getter.Setter
     **/

    public ResponseDTO getResponse() {
        this.getResponseDTO().getBody().setResponse(dto);
        return this.getResponseDTO();
    }

    public ResponseDTO getError() {
        this.getResponseDTO().getBody().setError(dto);
        return this.getResponseDTO();
    }

    public ResponseDTO getSuccess() {
        this.getResponseDTO().getBody().setSuccess(dto);
        return this.getResponseDTO();
    }

    private ResponseDTO getResponseDTO() {
        return responseDTO != null ? this.responseDTO : (this.responseDTO = new ResponseDTO());
    }

    private void setResponseDTO(ResponseDTO responseDTO) {
        this.responseDTO = responseDTO;
    }

    public ResponseDTO getListResponse() {
        this.getResponseDTO().getBody().setResponse(dto);
        return this.getResponseDTO();
    }
}
