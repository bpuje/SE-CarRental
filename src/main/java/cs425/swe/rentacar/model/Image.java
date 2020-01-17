package cs425.swe.rentacar.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import cs425.swe.rentacar.dto.IGeneralDTO;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.persistence.*;
import java.util.Date;

/**
 * Image @author Dios
 */

@Entity(name = "IMAGE")
public class Image implements IGeneralDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String size;

    @Column
    private String path;

    @Column
    private String ext;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Car car;

    @Column
    @CreationTimestamp
    @Temporal(TemporalType.DATE)
    private Date createdDate;

    public Image() {
        super();
    }

    public Image(String size, String path, String ext, Car car) {
        this.size = size;
        this.path = path;
        this.ext = ext;
        this.car = car;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getName() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getExt() {
        return ext;
    }

    public void setExt(String ext) {
        this.ext = ext;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getPath() {
        return ServletUriComponentsBuilder.fromCurrentContextPath().path("car/image/"
                + this.getId()).toUriString();
    }

    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", size='" + size + '\'' +
                ", path='" + path + '\'' +
                ", ext='" + ext + '\'' +
                ", car=" + (car != null ? car.getId() : "") +
                ", createdDate=" + createdDate +
                '}';
    }
}
