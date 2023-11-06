package backend.software.dto;

public class confirmAppointment {
    private String onSchedule;
    private String category;
    private String dateTimeAppointed;
    
    public String getOnSchedule() {
        return onSchedule;
    }
    public String getDateTimeAppointed() {
        return dateTimeAppointed;
    }
    public void setDateTimeAppointed(String dateTimeAppointed) {
        this.dateTimeAppointed = dateTimeAppointed;
    }
    public void setOnSchedule(String onSchedule) {
        this.onSchedule = onSchedule;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }

    
}
