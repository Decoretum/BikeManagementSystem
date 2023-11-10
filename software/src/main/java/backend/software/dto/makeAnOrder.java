package backend.software.dto;

import java.time.LocalDate;

public class makeAnOrder {
    private String dateOfPurchase;
    private String description;
    private String customerName;

    public String getDateOfPurchase() {
        return dateOfPurchase;
    }
    public String getDescription() {
        return description;
    }
    public String getCustomerName() {
        return customerName;
    }

    
}
