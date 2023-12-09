package backend.software.repositories;

import java.util.ArrayList;
import java.util.List;

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

    @Query("SELECT a FROM Bike a WHERE a.id = ?1")
    ArrayList<Bike> queryID(Long bikeID);

    @Query("SELECT a.name FROM Bike a")
    ArrayList<String> getAllName();

    @Query("SELECT a.name FROM Bike a WHERE a.removed = ?1")
    ArrayList<String> getAvailableBikes(boolean cond);
    
}
