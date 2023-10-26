package backend.software.services;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.UUID;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.dto.makeAnOrder;
import backend.software.dto.makeCategory;
import backend.software.dto.makeColor;
import backend.software.dto.makeOrder;
import backend.software.dto.makeBike;
import backend.software.models.Bike;
import backend.software.models.BikeCategories;
import backend.software.models.BikeColors;
import backend.software.models.Categories;
import backend.software.models.OrderEntry;
import backend.software.models.Orders;
import backend.software.repositories.BikeCategoryRepository;
import backend.software.repositories.BikeColorsRepository;
import backend.software.repositories.BikeRepository;
import backend.software.repositories.CategoryRepository;
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

    public engineeringService(CategoryRepository categoryRepository, BikeCategoryRepository bikeCategoryRepository, BikeColorsRepository bikeColorsRepository, OrderEntryRepository orderEntryRepository, BikeRepository bikeRepository, OrderRepostitory orderRepostitory){
        this.categoryRepository = categoryRepository;
        this.bikeCategoryRepository = bikeCategoryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.orderEntryRepository = orderEntryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.bikeRepository = bikeRepository;
        this.orderRepostitory = orderRepostitory;
    }

    // public Bike test(String bikeName){
    //     return bikeRepository.queryName(bikeName).get(0);
    // }

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
        
        //Colors and Categories
        ArrayList<Object> dtoColors = dto.getColors();
        ArrayList<Object> dtoCategs = dto.getCategory();

        for (int i = 0; i < dtoColors.size(); i++){
            BikeColors color = new BikeColors();
            color.setName((String) dtoColors.get(i));
            color.setBike(newBike);
            bikeRepository.save(newBike);
            bikeColorsRepository.save(color);
        }

        for (int i = 0; i < dtoCategs.size(); i++){
            //Find Category and relate them
            Categories category = categoryRepository.findThroughName((String) dtoCategs.get(i)).get(0);
            
            BikeCategories hybrid = new BikeCategories();

            hybrid.setBike(newBike);
            hybrid.setCategories(category);

            bikeRepository.save(newBike);
            bikeCategoryRepository.save(hybrid);
        }


        result.put("result", "Successfully added Bike " + dto.getName() + " to the app!");
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
}
