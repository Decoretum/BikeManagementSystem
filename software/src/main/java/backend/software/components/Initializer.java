package backend.software.components;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.software.models.Categories;
import backend.software.repositories.CategoryRepository;

@Component
public class Initializer {
    @Autowired
    private CategoryRepository categoryRepository;

    public void init(){
        ArrayList<Categories> categs = new ArrayList<>();
        ArrayList<Categories> dbCategs = categoryRepository.findAll();

        if (dbCategs.isEmpty()){
            Categories newCateg1 = new Categories();
            newCateg1.setName("Competitive");
            categs.add(newCateg1);

            Categories newCateg2 = new Categories();
            newCateg2.setName("Commuting");
            categs.add(newCateg2);

            Categories newCateg3 = new Categories();
            newCateg3.setName("Leisure");
            categs.add(newCateg3);

            Categories newCateg4 = new Categories();
            newCateg4.setName("Mountain Biking");
            categs.add(newCateg4);

            Categories newCateg5 = new Categories();
            newCateg5.setName("Military Operations");
            categs.add(newCateg5);

            categoryRepository.saveAll(categs);
        }
    }
}
