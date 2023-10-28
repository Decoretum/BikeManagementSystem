package backend.software.repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.software.models.Bike;
import backend.software.models.BikeColors;

@Repository
public interface BikeColorsRepository extends JpaRepository<BikeColors, Long> {
    @Query("SELECT a FROM BikeColors a WHERE a.name = ?1 AND a.bike = ?2")
    ArrayList<Object> queryName(String name, Bike bike);
    
}
