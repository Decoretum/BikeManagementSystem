package backend.software.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

@Table
@Entity
public class Categories {

    public Categories(){}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @JsonBackReference
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "categories", cascade = CascadeType.ALL)
    private List<BikeCategories> bikeCategories;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
}
