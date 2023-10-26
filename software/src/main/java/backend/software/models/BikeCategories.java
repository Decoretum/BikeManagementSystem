package backend.software.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table
@Entity
public class BikeCategories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;   

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "bike_id")
    private Bike bike;

    @JsonManagedReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    private Categories categories;

    public Categories getCategories() {
        return categories;
    }

    public void setCategories(Categories categories) {
        this.categories = categories;
    }


    public Bike getBike() {
        return bike;
    }

    public void setBike(Bike bike) {
        this.bike = bike;
    }

    
}
