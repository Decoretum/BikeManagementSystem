package backend.software.components;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.models.Bike;
import backend.software.models.BikeColors;
import backend.software.repositories.BikeColorsRepository;
import backend.software.repositories.BikeRepository;
import jakarta.annotation.PostConstruct;

@Component
public class TestRelation {

    @Autowired
    private BikeRepository bikeRepository;

    @Autowired
    private BikeColorsRepository bikeColorsRepository;

    public TestRelation(BikeRepository bikeRepository, BikeColorsRepository bikeColorsRepository){
        this.bikeColorsRepository = bikeColorsRepository;
        this.bikeRepository = bikeRepository;
    }


    @PostConstruct
    public void init(){

        ArrayList<Bike> getBike = bikeRepository.queryName("Java Ultra Bike");
        if (getBike.size() == 0){
        //add Bike Colors to a Bike 
        Bike newBike = new Bike();
        newBike.setCategory("Marathon");
        newBike.setDescription("Very powerful and strong!");
        newBike.setName("Java Ultra Bike");
        newBike.setPrice(12.214);
        newBike.setStock(32);
        newBike.setWheelSize("124 cm circumference, 21cm radius");

        BikeColors newColor = new BikeColors();
        newColor.setName("red");
        newColor.setBike(newBike);

        BikeColors newColor2 = new BikeColors();
        newColor2.setName("green");
        newColor2.setBike(newBike);
        
        bikeRepository.save(newBike);
        bikeColorsRepository.save(newColor);
        bikeColorsRepository.save(newColor2);
        }

    }
}
