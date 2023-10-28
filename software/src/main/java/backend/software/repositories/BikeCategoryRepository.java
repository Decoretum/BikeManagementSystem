package backend.software.repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.software.models.Bike;
import backend.software.models.BikeCategories;
import backend.software.models.Categories;

@Repository
public interface BikeCategoryRepository extends JpaRepository<BikeCategories, Long> {
     @Query("SELECT a FROM BikeCategories a WHERE a.bike = ?1 AND a.categories = ?2")
     ArrayList<BikeCategories> queryId(Bike a, Categories b);
}
