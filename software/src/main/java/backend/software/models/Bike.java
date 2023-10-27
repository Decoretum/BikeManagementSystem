package backend.software.models;

import java.util.*;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

@Table
@Entity
public class Bike {

    public Bike(){}
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    @Length(min = 1, max = 50, message = "Bike name must be between 1 and 50 text characters!")
    @NotNull(message = "cannot be null!")
    private String name;

    @Column(name = "description")
    @Length(min = 1, message = "Description cannot be empty!")
    @NotNull(message = "cannot be null!")
    private String description;

    @Column(name = "price")
    @DecimalMin("0.0")
    @DecimalMax("1000000.0")
    @NotNull(message = "cannot be null or negative!")
    private Double price;

    @Column(name = "stock")
    @NotNull(message = "Stock cannot be negative or null!")
    @Min(1)
    @Max(50)
    private int stock;

    @Column(name = "wheelSize")
    @NotNull(message = "cannot be null!")
    @Length(min = 1, max = 80, message = "Wheel size must be between 1 to 80 text characters!")
    private String wheelSize;

    @JsonManagedReference
    // @NotNull(message = "weren't chosen")
    @OneToMany(fetch = FetchType.EAGER, mappedBy= "bike", cascade = CascadeType.ALL)
    private List<BikeCategories> bikeCategories;

    @JsonManagedReference
    // @NotNull(message = "weren't chosen")
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "bike", cascade = CascadeType.ALL)
    private List<BikeColors> bikeColors;

    @JsonIgnore
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "bike", cascade = CascadeType.ALL)
    private List<OrderEntry> orderEntries;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    

    public List<BikeCategories> getBikeCategories() {
        return bikeCategories;
    }

    public void setBikeCategories(List<BikeCategories> bikeCategories) {
        this.bikeCategories = bikeCategories;
    }

    public String getWheelSize() {
        return wheelSize;
    }

    public void setWheelSize(String wheelSize) {
        this.wheelSize = wheelSize;
    }

    public List<BikeColors> getBikeColors() {
        return bikeColors;
    }

    public void setBikeColors(List<BikeColors> bikeColors) {
        this.bikeColors = bikeColors;
    }

    public List<OrderEntry> getOrderEntries() {
        return orderEntries;
    }

    public void setOrderEntries(List<OrderEntry> orderEntries) {
        this.orderEntries = orderEntries;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    
}
