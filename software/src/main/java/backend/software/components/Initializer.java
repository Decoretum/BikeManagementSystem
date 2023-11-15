package backend.software.components;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.dto.makeAnOrder;
import backend.software.dto.makeAppointment;
import backend.software.dto.makeBike;
import backend.software.dto.makeCustomer;
import backend.software.dto.makeOrder;
import backend.software.models.Appointment;
import backend.software.models.Bike;
import backend.software.models.Categories;
import backend.software.models.Customer;
import backend.software.models.OrderEntry;
import backend.software.models.Orders;
import backend.software.repositories.AppointmentRepository;
import backend.software.repositories.BikeCategoryRepository;
import backend.software.repositories.BikeRepository;
import backend.software.repositories.CategoryRepository;
import backend.software.repositories.CustomerRepository;
import backend.software.repositories.OrderEntryRepository;
import backend.software.repositories.OrderRepostitory;
import backend.software.services.engineeringService;
import jakarta.annotation.PostConstruct;

@Component
public class Initializer {
    @Autowired
    private engineeringService engineeringService;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private BikeRepository bikeRepository;

    @Autowired
    private BikeCategoryRepository bikeCategoryRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private OrderRepostitory orderRepostitory;

    @Autowired
    private OrderEntryRepository orderEntryRepository;


    @PostConstruct
    public void init(){
        //For the Categories
        ArrayList<Categories> categs = new ArrayList<>();
        ArrayList<Categories> dbCategs = categoryRepository.findAll();

        if (dbCategs.isEmpty()){
            Categories newCateg1 = new Categories();
            newCateg1.setName("Competitive");
            categs.add(newCateg1);

            Categories newCateg2 = new Categories();
            newCateg2.setName("Commuting");
            categs.add(newCateg2);

            Categories newCateg3 = new Categories();
            newCateg3.setName("Leisure");
            categs.add(newCateg3);

            Categories newCateg4 = new Categories();
            newCateg4.setName("Mountain Biking");
            categs.add(newCateg4);

            Categories newCateg5 = new Categories();
            newCateg5.setName("Military Operations");
            categs.add(newCateg5);

            categoryRepository.saveAll(categs);
        }

        //For the Bike
        List<Bike> bikes = bikeRepository.findAll();
        if (bikes.isEmpty()){
            makeBike DTO = new makeBike();
            DTO.setName("Tomasini");
            DTO.setDescription("Used for leisure, commute, mountain biking, and much more!");
            DTO.setPrice(56.214);
            DTO.setStock(43);

            ArrayList<String> a1 = new ArrayList<>();
            a1.add("Leisure");
            a1.add("Commuting");
            a1.add("Mountain Biking");

            ArrayList<String> a2 = new ArrayList<>();
            a2.add("Red");
            a2.add("Green");
            a2.add("Blue");

            DTO.setCategory(a1);
            DTO.setColors(a2);

            DTO.setWheelSize("Diameter x Rim Width: 700 x 19C");

            makeBike DTO2 = new makeBike();
            DTO2.setName("JavaBike");
            DTO2.setDescription("Used for competitive cycling and military operations!");
            DTO2.setPrice(43.44);
            DTO2.setStock(26);

            ArrayList<String> a3 = new ArrayList<>();
            a3.add("Military Operations");
            a3.add("Competitive");

            ArrayList<String> a4 = new ArrayList<>();
            a4.add("Orange");
            a4.add("Brown");
            a4.add("Black-White Strips");

            DTO2.setCategory(a3);
            DTO2.setColors(a4);

            DTO2.setWheelSize("Diameter x Rim Width: 400 x 13C");
            engineeringService.makeBike(DTO);
            engineeringService.makeBike(DTO2);
        }

        //For the Customers
        List<Customer> customers = customerRepository.findAll();
        if (customers.isEmpty()){
            makeCustomer a1 = new makeCustomer();
            a1.setClassification("Student");
            a1.setContactNumber("09234829281");
            a1.setEmail("mahusay@obf.ateneo.edu");
            a1.setIdNumber("201962");
            a1.setName("Jarvis");

            makeCustomer a2 = new makeCustomer();
            a2.setClassification("Professor");
            a2.setContactNumber("09260981234");
            a2.setEmail("halalan@obf.ateneo.edu");
            a2.setIdNumber("281921");
            a2.setName("Halalang Magiting");

            engineeringService.makeCustomer(a1);
            engineeringService.makeCustomer(a2);
        }

        //For the Appointments
        List<Appointment> appointments = appointmentRepository.findAll();
        if (appointments.isEmpty()){
            makeAppointment a1 = new makeAppointment();
            a1.setCategory("Repairs");
            a1.setCost(0.0);
            a1.setDateTimeAppointed("02-07-2023");
            a1.setDescription("I would like to have my bike repaired");
            a1.setName("Bike Repair on Front Wheel");
            a1.setCustomerName("Jarvis");

            makeAppointment a2 = new makeAppointment();
            a2.setCategory("Inquiry");
            a2.setCost(0.0);
            a2.setDateTimeAppointed("08-14-2023");
            a2.setDescription("I would like to inquire how to optimize my bike using my own personal tools and DIY equipment.");
            a2.setName("Bike Optimization Inquiry");
            a2.setCustomerName("Halalang Magiting");

            engineeringService.makeAppointment(a1);
            engineeringService.makeAppointment(a2);
        }

        //For the Orders
        List<Orders> orders = orderRepostitory.findAll();
        if (orders.isEmpty()){
            makeAnOrder a1 = new makeAnOrder();
            a1.setCustomerName("Jarvis");
            a1.setDescription("Ensure integrity with bike brand");
            
            makeAnOrder a2 = new makeAnOrder();
            a2.setCustomerName("Halalang Magiting");
            a2.setDescription("Handle with caution and wrap with tin Foil");

            engineeringService.makeOrder(a1);
            engineeringService.makeOrder(a2);
        }

        List<OrderEntry> bikeOrders = orderEntryRepository.findAll();
        if (bikeOrders.isEmpty()){
            // Bike Orders inside the Orders
            Orders orders2 = orderRepostitory.findById(1L).get();
            Orders orders3 = orderRepostitory.findById(2L).get();
            String uuid = orders2.getUuid();
            String uuid2 = orders3.getUuid();

            makeOrder a3 = new makeOrder();
            a3.setBikeName("Tomasini");
            a3.setBike_color("Blue");
            a3.setCost(281.07);
            a3.setQuantity(5);
            a3.setUuid(uuid);
            
            makeOrder a4 = new makeOrder();
            a4.setBikeName("JavaBike");
            a4.setBike_color("Brown");
            a4.setQuantity(10);
            a4.setCost(434.4);
            a4.setUuid(uuid2);

            engineeringService.makeBikeOrder(a3);
            engineeringService.makeBikeOrder(a4);
        }
        
    }
}
