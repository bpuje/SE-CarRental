package cs425.swe.rentacar.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModelProperty;

public class ImageDTO implements IGeneralDTO {

    @ApiModelProperty()
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String size;

    @ApiModelProperty()
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String name;

    public ImageDTO() {
    }

    public ImageDTO(String size, String name) {
        this.size = size;
        this.name = name;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
