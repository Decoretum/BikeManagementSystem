package backend.software.dto;

public class makeOrder {
    //Orders
    private String uuid;

    //order_entry
    private int quantity;
    private Double cost;

    //Bike
    private String bikeName;

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
