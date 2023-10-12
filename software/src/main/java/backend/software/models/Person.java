package backend.software.models;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Table
@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "firstName")
    @Size(max = 50, message = "First Name is too long!")
    @NotNull(message = "First Name cannot be null!")
    private String firstName;

    @Column(name = "middleName")
    @Size(max = 50, message = "Middle Name is too long!")
    @NotNull(message = "Middle Name cannot be null!")
    private String middleName;

    @Column(name = "lastName")
    @Size(max = 50, message = "Last Name is too long!")
    @NotNull(message = "Last Name cannot be null!")
    private String lastName;

    @Column(name = "dob")
    @NotNull(message = "Date of Birth cannot be null!")
    private LocalDate dob;

    @Column(name = "locationOfResidence")
    private String locationOfResidence;
}
