package backend.software.services;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters.LocalDateConverter;
import org.springframework.stereotype.Component;

import backend.software.dto.confirmAppointment;
import backend.software.dto.makeAnOrder;
import backend.software.dto.makeAppointment;
import backend.software.dto.makeCategory;
import backend.software.dto.makeColor;
import backend.software.dto.makeCustomer;
import backend.software.dto.makeOrder;
import backend.software.dto.makeBike;
import backend.software.models.Appointment;
import backend.software.models.Bike;
import backend.software.models.BikeCategories;
import backend.software.models.BikeColors;
import backend.software.models.Categories;
import backend.software.models.Customer;
import backend.software.models.OrderEntry;
import backend.software.models.Orders;
import backend.software.repositories.AppointmentRepository;
import backend.software.repositories.BikeCategoryRepository;
import backend.software.repositories.BikeColorsRepository;
import backend.software.repositories.BikeRepository;
import backend.software.repositories.CategoryRepository;
import backend.software.repositories.CustomerRepository;
import backend.software.repositories.OrderEntryRepository;
import backend.software.repositories.OrderRepostitory;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;

@Component
public class engineeringService {
    @Autowired
    private BikeRepository bikeRepository;

    @Autowired
    private BikeColorsRepository bikeColorsRepository;

    @Autowired
    private OrderRepostitory orderRepostitory;

    @Autowired
    private OrderEntryRepository orderEntryRepository;

    @Autowired
    private BikeCategoryRepository bikeCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    public engineeringService(AppointmentRepository appointmentRepository, CustomerRepository customerRepository, CategoryRepository categoryRepository, BikeCategoryRepository bikeCategoryRepository, BikeColorsRepository bikeColorsRepository, OrderEntryRepository orderEntryRepository, BikeRepository bikeRepository, OrderRepostitory orderRepostitory){
        this.appointmentRepository = appointmentRepository;
        this.customerRepository = customerRepository;
        this.categoryRepository = categoryRepository;
        this.bikeCategoryRepository = bikeCategoryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.orderEntryRepository = orderEntryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.bikeRepository = bikeRepository;
        this.orderRepostitory = orderRepostitory;
    }

    public Bike getBike(Long bikeID){
        return bikeRepository.queryID(bikeID).get(0);
    }

    //BIKE
    public ArrayList<Object> getBikes(){
        ArrayList<Object> bikes = bikeRepository.getBikes();
        return bikes;
    }

    public HashMap<Object, Object> makeBike(makeBike dto){
        HashMap<Object, Object> result = new HashMap<>();

        Bike newBike = new Bike();
        newBike.setName(dto.getName());
        newBike.setDescription(dto.getDescription());
        newBike.setPrice(dto.getPrice());
        newBike.setStock(dto.getStock());
        newBike.setWheelSize(dto.getWheelSize());
        newBike.setCanBeBorrowed(true);

        //Validator
        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Bike>> constraintViolations = validator.validate(newBike);
        if (constraintViolations.size() >= 1){
            ArrayList<String> errors = new ArrayList<>();
            for (ConstraintViolation<Bike> violation : constraintViolations){
                errors.add(violation.getPropertyPath() + " " + violation.getMessage());
            }
            result.put("result", errors);
            return result;
        }
        bikeRepository.save(newBike);
        
        //Colors and Categories
        ArrayList<String> dtoColors = dto.getColors();
        ArrayList<String> dtoCategs = dto.getCategory();

        
        for (int i = 0; i < dtoColors.size(); i++){
            BikeColors color = new BikeColors();
            color.setName((String) dtoColors.get(i));
            color.setBike(newBike);
            bikeColorsRepository.save(color);
            bikeRepository.save(newBike);
        }
        

        for (int i = 0; i < dtoCategs.size(); i++){
            //Find Category and relate them
            Categories category = categoryRepository.findThroughName((String) dtoCategs.get(i)).get(0);
            
            BikeCategories hybrid = new BikeCategories();

            hybrid.setBike(newBike);
            hybrid.setCategories(category);

            //bikeRepository.save(newBike);
            bikeCategoryRepository.save(hybrid);
        }

        result.put("result", "Successfully added Bike " + dto.getName() + " to the app!");
        return result;
    }

    public HashMap<Object, Object> editBike(makeBike dto){
        HashMap<Object, Object> result = new HashMap<>();
        Bike newBike = bikeRepository.queryName(dto.getName()).get(0);

        newBike.setName(dto.getName());
        newBike.setDescription(dto.getDescription());
        newBike.setPrice(dto.getPrice());
        newBike.setStock(dto.getStock());
        newBike.setWheelSize(dto.getWheelSize());

        //Validator
        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Bike>> constraintViolations = validator.validate(newBike);
        if (constraintViolations.size() >= 1){
            ArrayList<String> errors = new ArrayList<>();
            for (ConstraintViolation<Bike> violation : constraintViolations){
                errors.add(violation.getPropertyPath() + " " + violation.getMessage());
            }
            result.put("result", errors);
            return result;
        }
        bikeRepository.save(newBike);
        
        //Colors and Categories
        ArrayList<String> dtoColors = dto.getColors();
        ArrayList<String> dtoCategs = dto.getCategory();

        
        //Removing old Bike Colors
        List<BikeColors> bikeColors = newBike.getBikeColors();
        ArrayList<BikeColors> toDelete = new ArrayList<>();
            for (int i = 0; i < bikeColors.size(); i++){
                BikeColors color = bikeColors.get(i);
                if (!dtoColors.contains(color.getName())){
                    color.setBike(null);

                    bikeColorsRepository.save(color);
                    toDelete.add(color);
                }
            }
        bikeColorsRepository.deleteAll(toDelete);

        
        //add New Bike Color
        for (int i = 0; i < dtoColors.size(); i++){
            ArrayList<Object> bikeColors2 = bikeColorsRepository.queryName((String) dtoColors.get(i), newBike);
            if (bikeColors2.size() == 0){
                BikeColors color = new BikeColors();
                color.setName((String) dtoColors.get(i));
                color.setBike(newBike);
                bikeColorsRepository.save(color);

            }
        }

        
        //Removing old Categories
        ArrayList<BikeCategories> toDelete2 = new ArrayList<>();
        for (BikeCategories categ : newBike.getBikeCategories()){
            //Query Category from BikeCategory
            Categories category = categ.getCategories();
                if (!dtoCategs.contains(category.getName())){
                    toDelete2.add(categ);

                    categ.setBike(null);
                    categ.setCategories(null);

                    bikeCategoryRepository.save(categ);
                }
            }
        bikeCategoryRepository.deleteAll(toDelete2);
        
        //Adding new Categories
        for (int i = 0; i < dtoCategs.size(); i++){
            Categories category = categoryRepository.findThroughName(dtoCategs.get(i)).get(0);
            ArrayList<BikeCategories> bikeCategory = bikeCategoryRepository.queryId(newBike, category);
            if (bikeCategory.size() == 0){
                BikeCategories hybrid = new BikeCategories();

                hybrid.setBike(newBike);
                hybrid.setCategories(category);

                //bikeRepository.save(newBike);
                bikeCategoryRepository.save(hybrid);
            }
        }

        result.put("result", "Successfully edited Bike " + dto.getName() + " to the app!");
        return result;


    }

    //BIKE COMPONENTS

    public ArrayList<Categories> getCategories(){
        return categoryRepository.findAll();
    }

    public void addCategory(makeCategory json){
        Categories category = new Categories();
        category.setName((String) json.getName());
        categoryRepository.save(category);
    }

    public void addColor(makeColor json){
        BikeColors color = new BikeColors();
        color.setName(json.getName());

        Bike bike = (Bike) bikeRepository.queryName(json.getBikeName()).get(0);
        color.setBike(bike);

        bikeRepository.save(bike);
        bikeColorsRepository.save(color);
    }

    //ORDERS

    public Orders getOrder(String uuid){
        Orders order = orderRepostitory.uuidQuery(uuid).get(0);
        return order;
    }

    public void makeOrder(makeAnOrder order){
        System.out.println("DOP: " + order.getDateOfPurchase());
        Orders newOrder = new Orders();
        String uuid = UUID.randomUUID().toString();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd-yyyy");
        LocalDate date = LocalDate.parse(order.getDateOfPurchase(), formatter);
        newOrder.setCustomerName(order.getCustomerName());
        newOrder.setDateOfPurchase(date);
        newOrder.setDescription(order.getDescription());
        newOrder.setTotalcost(order.getTotalcost());
        newOrder.setUuid(uuid);
        orderRepostitory.save(newOrder);
        System.out.println("Order Created!");
    }
    public void makeBikeOrder(makeOrder order){
        Orders mainOrder = orderRepostitory.uuidQuery(order.getUuid()).get(0);
        Bike bike = bikeRepository.queryName(order.getBikeName()).get(0);
        OrderEntry orderEntry = new OrderEntry();

        orderEntry.setBike(bike);
        orderEntry.setOrder(mainOrder);
        orderEntry.setQuantity(order.getQuantity());
        orderEntry.setCost(order.getCost());

        bikeRepository.save(bike);
        orderRepostitory.save(mainOrder);
        orderEntryRepository.save(orderEntry);
    }

    //APPOINTMENTS

    public HashMap<Object, Object> makeCustomer(makeCustomer dto){
        Customer newCustomer = new Customer();
        newCustomer.setName(dto.getName());
        newCustomer.setClassification(dto.getClassification());
        newCustomer.setContactNumber(dto.getContactNumber());
        newCustomer.setIdNumber(dto.getIdNumber());

        if (dto.getEmail() == ""){
            newCustomer.setEmail(null);
        } else {
            newCustomer.setEmail(dto.getEmail());
        }

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Customer>> violations = validator.validate(newCustomer);

        HashMap<Object, Object> result = new HashMap<>();
        if (violations.size() >= 1){
            ArrayList<Object> errors = new ArrayList<>();
            for (ConstraintViolation<Customer> violation : violations){
                errors.add(violation.getMessage());
            }
            result.put("errors", errors);
            return result;
        }

        customerRepository.save(newCustomer);
        result.put("result", "Customer " + dto.getName() + " added!");
        return result;
    }

    public HashMap<Object, Object> makeAppointment(makeAppointment dto){
        Customer customer = (Customer) customerRepository.queryName(dto.getCustomerName()).get(0);
        
        Appointment appointment = new Appointment();

        LocalDate now = LocalDate.now();
        String dateAppointedString = dto.getDateTimeAppointed();

        //Parsing from String Date
        String year = "";
        String month = "";
        String day = "";

        for (int i = dateAppointedString.length()-1; i >= 0; i--){
            if (i > 5){
                year = String.valueOf(dateAppointedString.charAt(i)) + year;
            } else if (i > 2 && i < 5){
                day = String.valueOf(dateAppointedString.charAt(i)) + day;
            } else if (i < 2){
                month = String.valueOf(dateAppointedString.charAt(i)) + month;
            }
        }

        System.out.println(year);
        System.out.println(month);
        System.out.println(day);

        LocalDate convertedDate = LocalDate.of(Integer.parseInt(year), Integer.parseInt(month), Integer.parseInt(day));

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/YYYY");

        appointment.setCustomer(customer);
        appointment.setCategory(dto.getCategory());
        appointment.setDescription(dto.getDescription());
        appointment.setOngoing(true);

        appointment.setDateTimeAppointed(formatter.format(convertedDate).toString());
        appointment.setDateTimeCreated(formatter.format(now).toString());

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Appointment>> violations = validator.validate(appointment);
        
        //Validation
        HashMap<Object, Object> result = new HashMap<>();
        if (violations.size() >= 1){
            ArrayList<Object> errors = new ArrayList<>();
            for (ConstraintViolation<Appointment> violation : violations){
                errors.add(violation.getMessage());
            }
            result.put("errors", errors);
            return result;
        }

        appointmentRepository.save(appointment);
        result.put("result", "Appointment successfully created!");
        return result;  
    }

    //If Appointment deals with category of "Bike Borrowing"
    //This will confirm appointment cost BASED on Date Appointed AND the CURRENT Date
    
    //Else, if appointment deals with Bike Repairs, Services, and/or maintenance
    //No impact will come from Date Appointed 

    //DTO here will contain what kind of category will be used
    public void confirmAppointment(confirmAppointment dto){
        if (dto.getCategory().equals("Bike Borrowing")){
            LocalDate now = LocalDate.now();
            LocalDate appointed = LocalDate.parse(dto.getDateTimeAppointed());
            Duration duration = Duration.between(now, appointed);
            Long difference = Math.abs(duration.toDays());
            int penalty;
            //Comparisons for days
            if (difference <= 3){
                penalty = 200;
            }
        }
    }


}