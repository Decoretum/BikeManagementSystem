package backend.software.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.PostConstruct;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

import java.util.*;

@Component
@Path("/api")
public class engineeringController {
    @PostConstruct
    public void initialize(){
        System.out.println("Application is running at Port 8000");
    }

    @GET
    @Path("/test")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> test(){
        HashMap<Object, Object> hashMap = new HashMap<>();
        hashMap.put("Value", 123);
        return hashMap;
    }

    @POST
    @Path("/uploadImage")
    public void saveBikeImage(@RequestParam("image") MultipartFile multipartFile){
        
    }




}
