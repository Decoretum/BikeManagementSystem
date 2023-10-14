package backend.software.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.models.Bike;
import backend.software.repositories.BikeColorsRepository;
import backend.software.repositories.BikeRepository;

@Component
public class engineeringService {
    @Autowired
    private BikeRepository bikeRepository;

    @Autowired
    private BikeColorsRepository bikeColorsRepository;

    public engineeringService(BikeRepository bikeRepository, BikeColorsRepository bikeColorsRepository){
        this.bikeColorsRepository = bikeColorsRepository;
        this.bikeRepository = bikeRepository;
    }

    public Bike test(String bikeName){
        return bikeRepository.queryName(bikeName).get(0);
    }
}
