package backend.software.components;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.dto.makeBike;
import backend.software.models.Appointment;
import backend.software.models.Bike;
import backend.software.models.Categories;
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
            engineeringService.makeBike(DTO);
        }

        //For the Appointments

        //For the Orders

        //Bike Orders inside the Orders
    }
}
