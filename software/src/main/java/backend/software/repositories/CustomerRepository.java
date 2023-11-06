package backend.software.repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.software.models.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    @Query("SELECT a FROM Customer a WHERE a.name = ?1")
    ArrayList<Customer> queryName(String name);
}
