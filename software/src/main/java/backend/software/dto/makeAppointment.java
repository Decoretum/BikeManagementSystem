package backend.software.dto;

import java.math.BigDecimal;

public class makeAppointment {
    private String customerName;
    private String category;
    private String description;
    private String dateTimeAppointed;
    private BigDecimal cost;
    private String name;

    public makeAppointment(){}

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }



    public String getName() {
        return name;
    }



    public void setName(String name) {
        this.name = name;
    }

    public String getCustomerName() {
        return customerName;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getDateTimeAppointed() {
        return dateTimeAppointed;
    }

    public void setDateTimeAppointed(String dateTimeAppointed) {
        this.dateTimeAppointed = dateTimeAppointed;
    }

    
}
