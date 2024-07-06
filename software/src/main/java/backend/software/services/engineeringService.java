package backend.software.services;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.dto.confirmAppointment;
import backend.software.dto.editAnOrder;
import backend.software.dto.editAppointment;
import backend.software.dto.editCategory;
import backend.software.dto.editCustomer;
import backend.software.dto.makeAnOrder;
import backend.software.dto.makeAppointment;
import backend.software.dto.makeCategory;
import backend.software.dto.makeColor;
import backend.software.dto.makeCustomer;
import backend.software.dto.makeOrder;
import backend.software.dto.rentBike;
import backend.software.dto.editBike;
import backend.software.dto.makeBike;
import backend.software.models.Appointment;
import backend.software.models.Bike;
import backend.software.models.BikeCategories;
import backend.software.models.BikeColors;
import backend.software.models.Categories;
import backend.software.models.Customer;
import backend.software.models.OrderEntry;
import backend.software.models.Orders;
import backend.software.models.RentedBike;
import backend.software.repositories.AppointmentRepository;
import backend.software.repositories.BikeCategoryRepository;
import backend.software.repositories.BikeColorsRepository;
import backend.software.repositories.BikeRepository;
import backend.software.repositories.CategoryRepository;
import backend.software.repositories.CustomerRepository;
import backend.software.repositories.OrderEntryRepository;
import backend.software.repositories.OrderRepostitory;
import backend.software.repositories.RentedBikeRepository;
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

    @Autowired
    private RentedBikeRepository rentedBikeRepository;
    
//  Dependency Injection - The injector injects objects of interfaces that have the features or methods 
//  that the class needs to perform certain operations
    
    //2 Types
    // Setter - You call setter function to inject dependencies to class
    // Constructor - Dependencies injected through the constructor
    
    public engineeringService(RentedBikeRepository rentedBikeRepository, AppointmentRepository appointmentRepository, CustomerRepository customerRepository, CategoryRepository categoryRepository, BikeCategoryRepository bikeCategoryRepository, BikeColorsRepository bikeColorsRepository, OrderEntryRepository orderEntryRepository, BikeRepository bikeRepository, OrderRepostitory orderRepostitory){
        this.rentedBikeRepository = rentedBikeRepository;
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

    public ArrayList<String> getBikesAvailable(){
        return bikeRepository.getAvailableBikes(false);
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
        newBike.setRemoved(false);
        
        System.out.println(newBike);
        //Validator
        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Bike>> constraintViolations = validator.validate(newBike);
        List<Bike> bikePresent = bikeRepository.queryName(dto.getName());
        ArrayList<String> errors = new ArrayList<>();
        if (constraintViolations.size() >= 1){
            for (ConstraintViolation<Bike> violation : constraintViolations){
                errors.add(violation.getPropertyPath() + " " + violation.getMessage());
            }
            result.put("result", errors);
            return result;
        } else if (!bikePresent.isEmpty()){
        	errors.add("Bike " + dto.getName() + " is already present.");
            result.put("result", errors);
            return result;
        } else if (dto.getCategory().size() == 0) {
        	errors.add("Bike " + dto.getName() + "'s categories cannot be empty");
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

    public HashMap<Object, Object> editBike(editBike dto){
        HashMap<Object, Object> result = new HashMap<>();
        Bike newBike = bikeRepository.findById(dto.getId()).get();
  
        newBike.setName(dto.getName());
        newBike.setDescription(dto.getDescription());
        newBike.setPrice(dto.getPrice());
        newBike.setStock(dto.getStock());
        newBike.setWheelSize(dto.getWheelSize());


        //Validator
        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Bike>> constraintViolations = validator.validate(newBike);
        List<Bike> bikePresent = bikeRepository.queryName(dto.getName());
        if (constraintViolations.size() >= 1){
            ArrayList<String> errors = new ArrayList<>();
            for (ConstraintViolation<Bike> violation : constraintViolations){
                errors.add(violation.getPropertyPath() + " " + violation.getMessage());
            }
            result.put("result", errors);
            return result;
        } else if (!dto.getName().equals(newBike.getName()) && !bikePresent.isEmpty()){
            result.put("result", "Bike " + dto.getName() + " is already present.");
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

    public void deleteBike(Long bikeID){
        Bike bike = bikeRepository.findById(bikeID).get();
        bike.setCanBeBorrowed(false);
        bike.setRemoved(true);
        bikeRepository.save(bike);
    }

    //BIKE COMPONENTS

    public ArrayList<Categories> getCategories(){
        return categoryRepository.findAll();
    }

    public Categories getCategory (Long categID){
        return categoryRepository.findById(categID).get();
    }

    public HashMap<Object, Object> addCategory(makeCategory json){
        ArrayList<Categories> categPresent = categoryRepository.findThroughName(json.getName());
        HashMap<Object, Object> result = new HashMap<>();
        if (!categPresent.isEmpty()){
            result.put("error", json.getName() + " already exists");
            return result;
        } 

        Categories category = new Categories();
        category.setName((String) json.getName());
        categoryRepository.save(category);
        result.put("result", category);
        return result;
    }

    public void deleteCategory(Long categID){
        //Delete from bike
        Categories category = categoryRepository.findById(categID).get();
        List<BikeCategories> bikeCategories = category.getBikeCategories();

        for (BikeCategories c : bikeCategories){
            Bike bike = c.getBike();
            List<BikeCategories> bc = bike.getBikeCategories();
            bc.remove(c);
            c.setBike(null);
            c.setCategories(null);
            bikeRepository.save(bike);
            bikeCategoryRepository.save(c);
        }

        category.setBikeCategories(null);
        categoryRepository.save(category);
        categoryRepository.delete(category);
    }

    public HashMap<Object, Object> editCategory(editCategory json){
        HashMap<Object, Object> result = new HashMap<>();
        Categories edited = categoryRepository.findById(json.getCategID()).get();
        ArrayList<Categories> categPresent = categoryRepository.findThroughName(json.getName());
        if (!categPresent.isEmpty()){
            result.put("error", json.getName() + " already exists");
            return result;
        } else {
            result.put("result", "Category " + json.getCategID() + " successfully edited");
        }

        edited.setName((String) json.getName());
        categoryRepository.save(edited);
        return result;
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

    public List<Orders> getAllOrders(){
        return orderRepostitory.findAll();
    }

    public Orders getOrder(Long orderID){
        Orders order = orderRepostitory.findById(orderID).get();
        return order;
    }

    public void removeOrder(Long orderID){
        Orders order = orderRepostitory.findById(orderID).get();

        //Delete first the Order entries
        List<OrderEntry> orderEntries = order.getOrderEntries();
        for (int i = 0; i < orderEntries.size(); i++){
            OrderEntry entry = orderEntries.get(i);
            Bike bike = entry.getBike();
            
            //Remove entry from entries of a bike
            List<OrderEntry> bikeEntries = bike.getOrderEntries();
            bikeEntries.remove(entry);

            entry.setOrder(null);
            entry.setBike(null);

            bikeRepository.save(bike);
            orderEntryRepository.save(entry);
            orderEntryRepository.delete(entry);
        }

        order.setOrderEntries(null);
        orderRepostitory.save(order);
        orderRepostitory.delete(order);
    }

    public HashMap<Object, Object> editOrder(editAnOrder dto){
        HashMap<Object, Object> result = new HashMap<>();
        Orders order = orderRepostitory.uuidQuery(dto.getUuid()).get(0);
        
        order.setDescription(dto.getDescription());
        
        //Customer is invalid
        if (dto.getCustomerName().equals("No Customer")){
            result.put("result", "Choose a valid Customer");
            return result;
        }

        ArrayList<Customer> customerList = customerRepository.queryName(dto.getCustomerName());        
        if (customerList.isEmpty()) {
            result.put("result", "There is no customer with the name of " + dto.getCustomerName());
            return result;
        }
        
        Customer customer = customerList.get(0);
        System.out.println(customer.getName()); 
        order.setCustomer(customer);

        orderRepostitory.save(order);
        result.put("result", "Editing Order is a success!");
        return result;

    }

    public HashMap<String, String> makeOrder(makeAnOrder order){
        Orders newOrder = new Orders();
        String uuid = UUID.randomUUID().toString();
        HashMap<String, String> result = new HashMap<>();
        
        if (order.getCustomerName().equals("Customer Name")) {
        	result.put("error", "Select a Customer");
        	return result;
        } else if (order.getDescription().trim().isBlank()) {
        	result.put("error", "Add Description to the order");
        	return result;
        }

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter newFormatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        String date = LocalDate.parse(LocalDate.now().toString(), formatter).format(newFormatter).toString();
        
        Customer customer = customerRepository.queryName(order.getCustomerName()).get(0);
        newOrder.setCustomer(customer);
        newOrder.setDateOfPurchase(date);
        newOrder.setDescription(order.getDescription());
        newOrder.setTotalcost(new BigDecimal(0.0));
        newOrder.setUuid(uuid);
        newOrder.setFinished(false);
        orderRepostitory.save(newOrder);
        
        result.put("success", "Success!");
        return result;
    }

    //Create an OrderEntry Model
    public HashMap<String, String> makeBikeOrder(makeOrder order){
        Orders mainOrder = orderRepostitory.findById(order.getId()).get();
        Bike bike = bikeRepository.queryName(order.getBikeName()).get(0);
        BigDecimal oldCost = mainOrder.getTotalcost();
        
        OrderEntry orderEntry = new OrderEntry();
        HashMap<String, String> result = new HashMap<>();
        
        if (order.getBike_color().equals("Select a Color"))
        {
        	result.put("error", "You must select a color for the bike");
        	return result;
        }

        orderEntry.setBike(bike);
        orderEntry.setOrder(mainOrder);
        orderEntry.setQuantity(order.getQuantity());
        orderEntry.setCost(order.getCost());
        orderEntry.setBike_color(order.getBike_color());
        mainOrder.setTotalcost(oldCost.add(order.getCost()));
        

        orderEntryRepository.save(orderEntry);
        orderRepostitory.save(mainOrder);

 
        result.put("result", "Success!");
        return result;
    }

    //Get Bike Orders / OrderEntry within a certain Main Order
    public ArrayList<Object> getBikeOrders(Long a){
        Orders mainOrder = orderRepostitory.findById(a).get();
        List<OrderEntry> bikeOrders = orderEntryRepository.getFromOrder(mainOrder);

        ArrayList<Object> newArrayList = new ArrayList<>();

        //restructuring JSON
        for (OrderEntry i : bikeOrders){
            HashMap<Object, Object> newObject = new HashMap<>();
            newObject.put("bikeName", i.getBike().getName());
            newObject.put("bikeColor", i.getBike_color());
            newObject.put("quantity", i.getQuantity());
            newObject.put("cost", i.getCost());
            newArrayList.add(newObject);
        }

        return newArrayList;
    }

    //Removing a Bike Order from an Order
    public void deleteBikeOrder(Long bikeOrderId){
        OrderEntry bikeOrder = orderEntryRepository.findById(bikeOrderId).get();
        Orders mainOrder = bikeOrder.getOrder();
        Bike bike = bikeOrder.getBike();

        BigDecimal oldCost = mainOrder.getTotalcost();
        mainOrder.setTotalcost(oldCost.subtract(bikeOrder.getCost()));
        
        List<OrderEntry> bikeOrders = mainOrder.getOrderEntries();
        bikeOrders.remove(bikeOrder);
        orderRepostitory.save(mainOrder);

        List<OrderEntry> bikeOrders2 = bike.getOrderEntries();
        bikeOrders2.remove(bikeOrder);
        bikeRepository.save(bike);

        bikeOrder.setBike(null);
        bikeOrder.setOrder(null);
        
        orderEntryRepository.save(bikeOrder);
        orderEntryRepository.delete(bikeOrder);
        System.out.println("Bike Order " + bikeOrderId + " removed");
    } 

    //For this, this will confirm the order and relay changes to other
    //necessary entities. 
    //Goal is to avoid using database calls as much as possible
    public HashMap<Object, Object> confirmOrder(Long orderID){
        Orders cart = orderRepostitory.findById(orderID).get();
        ArrayList<Object> errors = new ArrayList<>();
        List<OrderEntry> bikeOrders = cart.getOrderEntries();
        
   
        //Contain the product - cost 
        HashMap<Object, Object> productCost = new HashMap<>();


        //Edge Case - Customer is null or Bike Orders are empty
        if (cart.getCustomer() == null){
            productCost.put("errors", "Order " + orderID + " has no Customer. Add a Customer to it.");
            return productCost;
        } else if (bikeOrders.isEmpty()) {
        	productCost.put("errors", "Order " + orderID + " has no Bike Orders. Add Bike Orders to this Order.");
        	return productCost;
        }
        
        for (OrderEntry a : bikeOrders){
            Bike bike = a.getBike();
            if (productCost.containsKey(bike.getName())){
                Integer oldStock = (Integer) productCost.get(bike.getName());
                productCost.put(bike.getName(), oldStock + a.getQuantity());
            } else {
                productCost.put(bike.getName(), a.getQuantity());
            }   
        }

        //Assessment
        for (Object bikeName : productCost.keySet()){
            Bike bike = bikeRepository.queryName((String) bikeName).get(0);
            Integer mapQuantity = (Integer) productCost.get(bikeName);
            if (bike.getStock() < mapQuantity){
                errors.add("Bike " + bikeName + " has an excess stock of " + productCost.get(bikeName));                
            }
        }

        if (!errors.isEmpty()){
            productCost.put("errors", errors);
            return productCost;
        }
        
        cart.setFinished(true);
        orderRepostitory.save(cart);

        productCost.put("result", "Order successfully confirmed and finished");
        return productCost;


    }

    //CUSTOMER

    public List<Customer> getAllCustomer(){
        return customerRepository.findAll();
    }

    public ArrayList<String> getAllCustomerNames(){
        return customerRepository.getCustomerNames();
    }

    public Customer getCustomer(Long customerID){
        return customerRepository.findById(customerID).get();
    }

    public String deleteTempCustomer(Long customerID){
        Customer customer = customerRepository.findById(customerID).get();
        customer.setDeleted(true);
        customerRepository.save(customer);
        return "success!";
    }

    //This will remove all of a Customer's Association
    //This algorithm works perfectly as long as Appointment's relation to Customer is not "NOT NULL" in Models
    public String deleteCustomer(Long customerID){
        Customer customer = customerRepository.findById(customerID).get();
        List<Appointment> appointments = customer.getAppointments();
        List<Orders> orders = customer.getOrders();
        List<RentedBike> rentedBikes = customer.getRentedBikes();

        ArrayList<Appointment> saved1 = new ArrayList<>();
        for (int i = 0; i < appointments.size(); i++){
            Appointment a = appointments.get(i);
            a.setCustomer(null);
            saved1.add(a);
        }

        appointmentRepository.saveAll(saved1);

        ArrayList<Orders> saved2 = new ArrayList<>();
        for (int i = 0; i < orders.size(); i++){
            Orders a = orders.get(i);
            a.setCustomer(null);
            saved2.add(a);
        }

        orderRepostitory.saveAll(saved2);

        ArrayList<RentedBike> saved3 = new ArrayList<>();
        for (int i = 0; i < rentedBikes.size(); i++){
            RentedBike a = rentedBikes.get(i);
            a.setCustomer(null);
            saved3.add(a);
        }

        rentedBikeRepository.saveAll(saved3);

        customer.setAppointments(null);
        customer.setOrders(null);
        customer.setRentedBikes(null);

        customerRepository.save(customer);
        customerRepository.delete(customer);

        System.out.println("Customer " + customerID + " has been deleted from the application");
        return "success!";
    }

    public HashMap<Object, Object> makeCustomer(makeCustomer dto){
        Customer newCustomer = new Customer();
        newCustomer.setName(dto.getName());
        newCustomer.setClassification(dto.getClassification());
        newCustomer.setContactNumber(dto.getContactNumber());
        newCustomer.setIdNumber(dto.getIdNumber());
        newCustomer.setDeleted(false);

        if (dto.getEmail() == ""){
            newCustomer.setEmail(null);
        } else {
            newCustomer.setEmail(dto.getEmail());
        }

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Customer>> violations = validator.validate(newCustomer);
        List<Customer> customerPresent = customerRepository.queryName(dto.getName());
        HashMap<Object, Object> result = new HashMap<>();
        if (violations.size() >= 1){
            ArrayList<Object> errors = new ArrayList<>();
            for (ConstraintViolation<Customer> violation : violations){
                errors.add(violation.getMessage());
            }
            result.put("errors", errors);
            return result;
        } else if (!customerPresent.isEmpty()){
            result.put("errors", "Customer " + dto.getName() + " already exists in the database");
            return result;
        }

        customerRepository.save(newCustomer);
        result.put("result", "Customer " + dto.getName() + " added!");
        return result;
    }

    public HashMap<Object, Object> editCustomer(editCustomer dto){
        Customer customer = customerRepository.findById(dto.getId()).get();
        customer.setClassification(dto.getClassification().trim());
        customer.setContactNumber(dto.getContactNumber().trim());
        if (dto.getEmail().trim().equals("")){
            customer.setEmail(null);
        } else {
            customer.setEmail(dto.getEmail().trim());
        }
        customer.setName(dto.getName());
        customer.setIdNumber(dto.getIdNumber());
        customer.setBalance(dto.getBalance());

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Customer>> violations = validator.validate(customer);

        HashMap<Object, Object> result = new HashMap<>();
        List<Customer> customerPresent = customerRepository.queryName(dto.getName());
        if (violations.size() >= 1){
            ArrayList<Object> errors = new ArrayList<>();
            for (ConstraintViolation<Customer> violation : violations){
                errors.add(violation.getMessage());
            }
            result.put("errors", errors);
            return result;
        } else if (!customerPresent.isEmpty() && !customer.getName().equals(dto.getName())){
            result.put("errors", "Customer " + dto.getName() + " already exists");
            return result;
        }

        customerRepository.save(customer);
        result.put("result", "Customer " + dto.getId() + " has been edited!");
        return result;
    }

    //APPOINTMENT

    public List<Appointment> getAllAppointments(){
        return appointmentRepository.findAll();
    }

    public HashMap<Object, Object> getAppointment(Long apID){
        Optional<Appointment> appointment =  appointmentRepository.findById(apID);
        HashMap<Object, Object> result = new HashMap<>();
        result.put("Appointment", appointment.get());
        return result;
    }

    public void deleteAppointment(Long appointmentID){
        Appointment appointment = appointmentRepository.findById(appointmentID).get();
        Customer customer = appointment.getCustomer();
        List<Appointment> appointments = customer.getAppointments();
        appointments.remove(appointment);
        
        customerRepository.save(customer);
        appointmentRepository.deleteById(appointmentID);
        System.out.println("Appointment " + appointmentID +  " deleted");

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
        appointment.setName(dto.getName());
        appointment.setCost(dto.getCost());

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

    public HashMap<Object, Object> editAppointment(editAppointment dto){
        Appointment appointment = appointmentRepository.findById(dto.getId()).get();
        Customer customer = customerRepository.queryName(dto.getCustomerName()).get(0);
        System.out.println(dto.getOngoing());
        appointment.setCategory(dto.getCategory());
        appointment.setCost(dto.getCost());
        appointment.setCustomer(customer);
        appointment.setDateTimeAppointed(dto.getDateTimeAppointed());
        appointment.setDescription(dto.getDescription());
        appointment.setName(dto.getName());
        appointment.setOngoing(dto.getOngoing());
        appointmentRepository.save(appointment);

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

        result.put("result", "Appointment successfully edited");
        return result;
    }

    public String confirmAppointment(Long appID){
        Optional<Appointment> appointment = appointmentRepository.findById(appID);
        appointment.get().setOngoing(false);
        appointmentRepository.save(appointment.get());
        System.out.println("Appointment Confirmed");
        return "success!";
    }

    //RENTED BIKE
    public ArrayList<Object> getAllRentals(){
        ArrayList<Object> rentedBikes = new ArrayList<>(rentedBikeRepository.findAll());
        return rentedBikes;
        
    }

    public RentedBike getRental(Long rentID){
        RentedBike rentedBike = rentedBikeRepository.findById(rentID).get();
        return rentedBike;
    }

    public String rentBike(rentBike dto){
        Bike bike = bikeRepository.queryName(dto.getBikeName()).get(0);
        Customer customer = customerRepository.queryName(dto.getCustomerName()).get(0);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/YYYY");
        LocalDate date = LocalDate.now();
        RentedBike rentedBike = new RentedBike();
        Long days = dto.getDays();
        Long hours = 24 * days;

        rentedBike.setBike(bike);
        rentedBike.setCustomer(customer);
        rentedBike.setDateRented(formatter.format(date));
        rentedBike.setRentalDuration(hours);
        rentedBike.setFinished(false);
        rentedBike.setDateConfirmed("In Progress");
        bike.setCanBeBorrowed(false);
        
        rentedBikeRepository.save(rentedBike);
        bikeRepository.save(bike);
        System.out.println("Bike " + dto.getBikeName() + " rented by " + dto.getCustomerName());
        return "success!";
    }

    public String confirmRental(Long rentID){
        RentedBike rentedBike = rentedBikeRepository.findById(rentID).get();
        Customer customer = rentedBike.getCustomer();
        Bike bike = rentedBike.getBike();
        
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        DateTimeFormatter oldFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");


        String nowDate = LocalDate.parse(LocalDate.now().toString(), oldFormatter).format(formatter);

        LocalDate now = LocalDate.parse(nowDate, formatter);
        LocalDate dateRented = LocalDate.parse(rentedBike.getDateRented(), formatter);
        Long duration = now.until(dateRented, ChronoUnit.DAYS);

        System.out.println("DIFFERENCE: " + duration);
        
        BigDecimal difference = new BigDecimal(Math.abs(duration));
        
        //Turn Rental Duration to Days
        Long rentDuration = rentedBike.getRentalDuration();
        Long rentDurationDays = (rentDuration / 24);
        
        //Get Expected Date of Returning rental
        LocalDate expectedDate = dateRented.plusDays(rentDurationDays);

        BigDecimal baseCost = new BigDecimal(200 + (2 * (rentDuration + 1.5)));
        BigDecimal penalty;
        
        //Compare the "Now" date to the "Expected Date"
        Long gap = now.until(expectedDate, ChronoUnit.DAYS);

        if (gap < 0) {
            BigDecimal v1 = difference.add(BigDecimal.valueOf(1.5));
            BigDecimal v2 = v1.multiply(BigDecimal.valueOf(5));
            penalty = (baseCost.add(v2));
        } else {
            penalty = new BigDecimal(0.0);
        }

        bike.setCanBeBorrowed(true);
        customer.setBalance(penalty.add(baseCost));
        rentedBike.setFinished(true);
        rentedBike.setDateConfirmed(nowDate);
        
        rentedBikeRepository.save(rentedBike);
        customerRepository.save(customer);
        bikeRepository.save(bike);
        System.out.println("Bike Rental Completed!");
        return "success!";
        
    }

    public String deleteRental(Long rentedBikeID){
        RentedBike rentedBike = rentedBikeRepository.findById(rentedBikeID).get();
        if (rentedBike.getFinished() == false){
            Bike bike = rentedBike.getBike();
            List<RentedBike> rentedBikes2 = bike.getRentedBikes();
            //rentedBikes2.remove(rentedBike);
            rentedBike.setBike(null);
            //bikeRepository.save(bike);

            Customer customer = rentedBike.getCustomer();
            if (customer != null){
                List<RentedBike> rentedBikes = customer.getRentedBikes();
                //rentedBikes.remove(rentedBike);
                rentedBike.setCustomer(null);
                //customerRepository.save(customer);
            }

            rentedBikeRepository.save(rentedBike);
            rentedBikeRepository.delete(rentedBike);
            
            System.out.println("Rented Bike " + rentedBikeID + " has been deleted");     
            return "success!"; 
        }
        else {
        	return "Rental Bike ID instance of " + rentedBikeID + " has already been confirmed and cannot be deleted"; 
        }
        
    }


}