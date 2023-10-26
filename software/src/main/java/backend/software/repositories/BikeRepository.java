package backend.software.repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.software.models.Bike;

@Repository
public interface BikeRepository extends JpaRepository<Bike, Long> {
    @Query("SELECT a FROM Bike a")
    ArrayList<Object> getBikes();

    @Query("SELECT a FROM Bike a WHERE a.name = ?1")
    ArrayList<Bike> queryName(String bikeName);
    
}
