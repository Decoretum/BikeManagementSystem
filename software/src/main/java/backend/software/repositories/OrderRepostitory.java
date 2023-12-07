package backend.software.repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.software.models.Orders;

@Repository
public interface OrderRepostitory extends JpaRepository<Orders, Long> {
    @Query("SELECT a FROM Orders a WHERE a.uuid = ?1")
    ArrayList<Orders> uuidQuery(String uuid);

    @Query("Select a.id FROM Orders a")
    ArrayList<String> getAllNumbers();

}
