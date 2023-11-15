package backend.software.dto;

public class makeOrder {

    public makeOrder(){}
    //Orders
    private String uuid;

    //order_entry
    private int quantity;
    private Double cost;

    //Bike and the color chosen
    private String bikeName;
    private String bike_color;

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }


    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public void setCost(Double cost) {
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


    public String getUuid() {
        return uuid;
    }


    public int getQuantity() {
        return quantity;
    }


    public Double getCost() {
        return cost;
    }

    public String getBikeName() {
        return bikeName;
    }

}
