package backend.software.components;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.models.Bike;
import backend.software.models.BikeCategories;
import backend.software.models.BikeColors;
import backend.software.models.Categories;
import backend.software.repositories.BikeCategoryRepository;
import backend.software.repositories.BikeColorsRepository;
import backend.software.repositories.BikeRepository;
import backend.software.repositories.CategoryRepository;
import jakarta.annotation.PostConstruct;


public class TestRelation {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private BikeRepository bikeRepository;

    @Autowired
    private BikeColorsRepository bikeColorsRepository;

    @Autowired
    private BikeCategoryRepository bikeCategoryRepository;

    public TestRelation(CategoryRepository categoryRepository, BikeCategoryRepository bikeCategoryRepository, BikeRepository bikeRepository, BikeColorsRepository bikeColorsRepository){
        this.categoryRepository = categoryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.bikeRepository = bikeRepository;
        this.bikeCategoryRepository = bikeCategoryRepository;
    }


    @PostConstruct
    public void init(){
        System.out.println("test?");

        ArrayList<Bike> getBike = bikeRepository.queryName("Java Ultra Bike");
        if (getBike.size() == 0){

        //add Bike Colors to a Bike 
        Bike newBike = new Bike();
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

        //add Categories to a bike

        Categories categories = new Categories();
        categories.setName("Marathoning");
        categoryRepository.save(categories);
        
        Categories categories2 = new Categories();
        categories2.setName("Commuting");
        categoryRepository.save(categories2);
        



        BikeCategories hybrid1 = new BikeCategories();
        hybrid1.setBike(newBike);
        hybrid1.setCategories(categories);
        // categoryRepository.save(categories);

        BikeCategories hybrid2 = new BikeCategories();
        hybrid2.setBike(newBike);
        hybrid2.setCategories(categories2);
        // categoryRepository.save(categories2);

        bikeRepository.save(newBike);
        bikeCategoryRepository.save(hybrid1);
        bikeCategoryRepository.save(hybrid2);
        

        bikeColorsRepository.save(newColor);
        bikeColorsRepository.save(newColor2);
        

        
        }

    }
}
