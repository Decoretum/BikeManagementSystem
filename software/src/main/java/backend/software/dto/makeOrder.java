package backend.software.dto;

import java.math.BigDecimal;

public class makeOrder {

    public makeOrder(){}
    //Orders
    private Long id;

    //order_entry
    private int quantity;
    private BigDecimal cost;

    //Bike and the color chosen
    private String bikeName;
    private String bike_color;


    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }


    public void setBikeName(String bikeName) {
        this.bikeName = bikeName;
    }


    public String getBike_color() {
        return bike_color;
    }


    public void setBike_color(String bike_color) {
        this.bike_color = bike_color;
    }



    public int getQuantity() {
        return quantity;
    }


    public BigDecimal getCost() {
        return cost;
    }

    public String getBikeName() {
        return bikeName;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }

}
