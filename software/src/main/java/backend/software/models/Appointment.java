package backend.software.models;

import org.hibernate.validator.constraints.Length;
import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jakarta.ws.rs.DefaultValue;

import java.math.BigDecimal;
import java.util.*;

@Table
@Entity
public class Appointment {
    public Appointment(){}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull(message = "Appointment name must have a name")
    @Size(min = 5, max = 100, message = "Appointment name must be between 5 to 100 characters")
    @Column(name = "name")
    private String name;

    @NotNull(message = "Description cannot be null")
    @Size(min = 2, max = 255, message = "Description must be between 2 to 255 characters")
    @Column(name = "description")
    private String description;

    @NotNull(message = "Category cannot be null")
    @Column(name = "category")
    @Size(min = 5, message = "Category must have a minimum of 5 characters")
    private String category;

    @Column(name = "ongoing")
    @NotNull(message = "Ongoing cannot be null, can only be true or false")
    private Boolean ongoing;

    @Column(name = "cost")
    @NotNull(message = "Cost cannot be null")
    @DecimalMin("0.00")
    @DecimalMax("700.00")
    private BigDecimal cost;

    @NotNull(message = "Date Created cannot be null")
    @Column(name = "dateTimeCreated")
    private String dateTimeCreated;

    @NotNull(message = "Date Appointed cannot be null")
    @Column(name = "dateTimeAppointed")
    private String dateTimeAppointed;

    @JsonManagedReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDateTimeCreated() {
        return dateTimeCreated;
    }

    public void setDateTimeCreated(String dateTimeCreated) {
        this.dateTimeCreated = dateTimeCreated;
    }

    public String getDateTimeAppointed() {
        return dateTimeAppointed;
    }

    public void setDateTimeAppointed(String dateTimeAppointed) {
        this.dateTimeAppointed = dateTimeAppointed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Boolean getOngoing() {
        return ongoing;
    }

    public void setOngoing(Boolean ongoing) {
        this.ongoing = ongoing;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    

}
