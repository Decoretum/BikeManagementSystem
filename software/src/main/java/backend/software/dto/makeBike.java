package backend.software.dto;
import java.util.*;

public class makeBike {
    private String name;
    private String description;
    private Double price;
    private int stock;
    private ArrayList<String> category;
    private ArrayList<String> colors;
    private String wheelSize;
    private boolean removed;

    public makeBike(){}
    
    public String getName() {
        return name;
    }
    public void setRemoved(boolean condition) {
    	this.removed = condition;
    }
    public boolean getRemoved() {
    	return removed;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }
    
    public String getWheelSize() {
        return wheelSize;
    }
    public ArrayList<String> getCategory() {
        return category;
    }
    public void setCategory(ArrayList<String> category) {
        this.category = category;
    }
    public ArrayList<String> getColors() {
        return colors;
    }
    public void setColors(ArrayList<String> colors) {
        this.colors = colors;
    }
    public void setWheelSize(String wheelSize) {
        this.wheelSize = wheelSize;
    }
    
}
