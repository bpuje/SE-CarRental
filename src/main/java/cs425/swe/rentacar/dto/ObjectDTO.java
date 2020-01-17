package cs425.swe.rentacar.dto;

import java.util.List;

public class ObjectDTO implements IGeneralDTO {

    private Object object;

    public ObjectDTO(Object object) {
        this.object = object;
    }

    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }
}
