package backend.software.dto;

import java.time.LocalDate;

public class makeAnOrder {
    private String dateOfPurchase;
    private String description;
    private Double totalcost;
    private String customerName;

    public String getDateOfPurchase() {
        return dateOfPurchase;
    }
    public String getDescription() {
        return description;
    }
    public Double getTotalcost() {
        return totalcost;
    }
    public String getCustomerName() {
        return customerName;
    }

    
}
