package backend.software.services;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.dto.makeAnOrder;
import backend.software.dto.makeCategory;
import backend.software.dto.makeColor;
import backend.software.dto.makeOrder;
import backend.software.models.Bike;
import backend.software.models.BikeCategories;
import backend.software.models.BikeColors;
import backend.software.models.OrderEntry;
import backend.software.models.Orders;
import backend.software.repositories.BikeCategoryRepository;
import backend.software.repositories.BikeColorsRepository;
import backend.software.repositories.BikeRepository;
import backend.software.repositories.OrderEntryRepository;
import backend.software.repositories.OrderRepostitory;

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

    public engineeringService(BikeCategoryRepository bikeCategoryRepository, BikeColorsRepository bikeColorsRepository, OrderEntryRepository orderEntryRepository, BikeRepository bikeRepository, OrderRepostitory orderRepostitory){
        this.bikeCategoryRepository = bikeCategoryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.orderEntryRepository = orderEntryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.bikeRepository = bikeRepository;
        this.orderRepostitory = orderRepostitory;
    }

    public Bike test(String bikeName){
        return bikeRepository.queryName(bikeName).get(0);
    }

    //BIKE COMPONENTS

    public void addCategory(makeCategory json){
        BikeCategories category = new BikeCategories();
        category.setName(json.getName());
        
        Bike bike = (Bike) bikeRepository.queryName(json.getBikeName()).get(0);
        category.setBike(bike);

        bikeRepository.save(bike);
        bikeCategoryRepository.save(category);
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
