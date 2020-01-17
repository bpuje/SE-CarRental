package cs425.swe.rentacar.model;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public enum Role implements GrantedAuthority {
    ADMIN,
    OWNER,
    RENTER;

    @Override
    public String getAuthority() {
        return name();
    }
}
