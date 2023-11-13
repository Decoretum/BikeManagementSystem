package backend.software.repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.software.models.OrderEntry;
import backend.software.models.Orders;

@Repository
public interface OrderEntryRepository extends JpaRepository<OrderEntry, Long>{
    @Query("SELECT a FROM OrderEntry a WHERE a.order = ?1")
    ArrayList<OrderEntry> getFromOrder(Orders order);
}
