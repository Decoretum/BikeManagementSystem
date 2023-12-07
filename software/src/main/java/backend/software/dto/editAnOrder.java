package backend.software.dto;

public class editAnOrder {
    private String description;
    private String customerName;
    private String uuid;

    public editAnOrder(){}

    public String getDescription() {
        return description;
    }
    public String getCustomerName() {
        return customerName;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
}
