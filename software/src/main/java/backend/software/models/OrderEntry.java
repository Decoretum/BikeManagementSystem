package backend.software.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

@Table
@Entity
public class OrderEntry {

    public OrderEntry(){}
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    
    @ManyToOne
    @JoinColumn(name = "bike_id")
    private Bike bike;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Orders order;

    @Column(name = "quantity")
    @Min(1)
    private int quantity;

    @Column(name = "cost")
    @DecimalMin("0")
    private Double cost;

}
