package backend.software.services;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.dto.makeAnOrder;
import backend.software.dto.makeOrder;
import backend.software.models.Bike;
import backend.software.models.OrderEntry;
import backend.software.models.Orders;
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

    public engineeringService(OrderEntryRepository orderEntryRepository, BikeRepository bikeRepository, BikeColorsRepository bikeColorsRepository, OrderRepostitory orderRepostitory){
        this.orderEntryRepository = orderEntryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.bikeRepository = bikeRepository;
        this.orderRepostitory = orderRepostitory;
    }

    public Bike test(String bikeName){
        return bikeRepository.queryName(bikeName).get(0);
    }

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
