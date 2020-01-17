package cs425.swe.rentacar.model;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "user", uniqueConstraints = @UniqueConstraint(columnNames = "userName"))
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@NotNull
	@Column(unique = true)
	private String userName;

	@Enumerated(EnumType.STRING)
	@NotNull
	private UserStatus status = UserStatus.Active;

	@NotNull
	private String password;

	private String firstName;

	private String lastName;

	private String phone;

	@NotNull
	private String email;

	@CreationTimestamp
	private LocalDateTime createDate;

	@ElementCollection(fetch = FetchType.EAGER)
    private List<Role> roles;

	/**
	 * Default constructor
	 */
	public User() { }

	/**
	 * Constructor
	 * @param userName
	 * @param email
	 * @param firstName
	 * @param lastName
	 */
	public User(String userName, String email, String firstName, String lastName) {
		this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

	/**
	 * Constructor
	 * @param userName
	 * @param password
	 * @param email
	 * @param firstName
	 * @param lastName
	 */
	public User(String userName, String password, String email, String firstName, String lastName) {
		this(userName, email, firstName, lastName);
        this.password = password;
    }

	///////////////////////////////
	///////////////////////////////
	////  Getter & Setter


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public UserStatus getStatus() {
		return status;
	}

	public void setStatus(UserStatus status) {
		this.status = status;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@JsonIgnore
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDateTime getCreateDate() {
		return createDate;
	}

	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}

	public List <Role> getRoles() {
        return roles;
    }

    public void setRoles(List <Role> roles) {
        this.roles = roles;
    }

//    @PrePersist
//    protected void onCreate() {
//      createDate = new Date();
//    }

	@Override
	public String toString() {
		return "User{" +
	            "id=" + id +
	            ", userName='" + userName + '\'' +
	            ", firstName='" + firstName + '\'' +
	            ", lastName='" + lastName + '\'' +
	            ", email='" + email + '\'' +
	            ", password='" + "*********" + '\'' +
	            ", roles=" + roles +
	            '}';
	}

}
