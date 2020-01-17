package cs425.swe.rentacar.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;

public class CarDTO implements IGeneralDTO {

    @ApiModelProperty()
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String description;

    private String carBrand;

    @ApiModelProperty()
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String model;

    @ApiModelProperty()
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer year;

    @ApiModelProperty()
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Double price;

    @ApiModelProperty()
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer seats;

    @ApiModelProperty()
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<ImageDTO> images;

    public CarDTO() {
    }

    public CarDTO(String description, String carBrand, String model, Integer year, Double price, Integer seats, List<ImageDTO> images) {
        this.description = description;
        this.carBrand = carBrand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.seats = seats;
        this.images = images;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getSeats() {
        return seats;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    public List<ImageDTO> getImages() {
        return images;
    }

    public void setImages(List<ImageDTO> images) {
        this.images = images;
    }
}
