package backend.software.controller;

import org.springframework.beans.factory.annotation.Autowired;
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

import backend.software.models.Bike;
import backend.software.services.engineeringService;
import jakarta.annotation.PostConstruct;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;

import java.util.*;

@Component
@Path("/api")
public class engineeringController {

    @Autowired
    engineeringService engineeringService;

    public engineeringController(engineeringService engineeringService){
        this.engineeringService = engineeringService;
    }

    @PostConstruct
    public void initialize(){
        System.out.println("Application is running at Port 8000");
    }

    @GET
    @Path("/test")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public Bike test(
        @QueryParam("bikeName") String bikeName
    ){
        return engineeringService.test(bikeName);
    }

    @POST
    @Path("/uploadImage")
    public void saveBikeImage(@RequestParam("image") MultipartFile multipartFile){
        
    }




}
