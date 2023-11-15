package backend.software.dto;

import java.time.LocalDate;

public class makeAnOrder {
    private String description;
    private String customerName;

    public makeAnOrder(){}

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

    
}
