package backend.software.repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.software.models.Categories;

@Repository
public interface CategoryRepository extends JpaRepository<Categories, Long> {
    @Query("SELECT a FROM Categories a WHERE a.name = ?1")
    public ArrayList<Categories> findThroughName(String a);

    @Query("SELECT a FROM Categories a")
    public ArrayList<Categories> findAll();
}
