package backend.software.dto;

public class editCategory {
    private Long categID;
    private String name;
    public Long getCategID() {
        return categID;
    }
    public void setCategID(Long categID) {
        this.categID = categID;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
