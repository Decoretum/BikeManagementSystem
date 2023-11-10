package backend.software.controller;

import java.util.*;

import javax.print.attribute.standard.Media;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import backend.software.dto.confirmAppointment;
import backend.software.dto.confirmOrder;
import backend.software.dto.confirmRental;
import backend.software.dto.editAppointment;
import backend.software.dto.makeAnOrder;
import backend.software.dto.makeAppointment;
import backend.software.dto.makeOrder;
import backend.software.dto.rentBike;
import backend.software.dto.makeBike;
import backend.software.dto.makeCategory;
import backend.software.dto.makeCustomer;
import backend.software.models.Bike;
import backend.software.models.Categories;
import backend.software.models.Orders;
import backend.software.repositories.BikeRepository;
import backend.software.services.engineeringService;
import jakarta.annotation.PostConstruct;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;

@Component
@Path("/api")
public class engineeringController {

    @Autowired
    engineeringService engineeringService;

    @Autowired
    BikeRepository bikeRepository;

    public engineeringController(BikeRepository bikeRepository, engineeringService engineeringService){
        this.engineeringService = engineeringService;
        this.bikeRepository = bikeRepository;
    }

    @PostConstruct
    public void initialize(){
        System.out.println("Application is running at Port 8000");
    }

    //BIKES
    @GET
    @Path("/getBikes")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<Object> getBikes(){
        return engineeringService.getBikes();
    }

    @GET
    @Path("/getBike")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public Bike getBike(@QueryParam("bikeID") Long bikeID){
        return engineeringService.getBike(bikeID);
    }

    @POST
    @Path("/makeBike")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> makeBike(makeBike dto){
        return engineeringService.makeBike(dto);
    }

    @PUT
    @Path("/editBike")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> editBike(makeBike dto){
        return engineeringService.editBike(dto);
    }

    //CATEGORY

    @POST
    @Path("/makeCategory")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public void addCategory(makeCategory dto){
        engineeringService.addCategory(dto);
    }

    @GET
    @Path("/getCategories")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<Categories> getCategories(){
        return engineeringService.getCategories();
    }


    //ORDERS

    @GET
    @Path("/getOrder")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public Orders getOrder(
        @QueryParam("orderUUID") String uuid
    ){
        return engineeringService.getOrder(uuid);
    }

    @POST
    @Path("/makeAnOrder")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public void makeOrder(makeAnOrder order){
        engineeringService.makeOrder(order);
    }

    @POST
    @Path("/confirmOrder")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> confirmOrder(confirmOrder dto){
        return engineeringService.confirmOrder(dto);
    }

    @POST
    @Path("/makeBikeOrder")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public void makeBikeOrder(makeOrder order){
        engineeringService.makeBikeOrder(order);
    }

    @DELETE
    @Path("/removeBikeOrder")
    public void deleteBikeOrder(@QueryParam("id") Long id){
        
    }

    @DELETE
    @Path("/removeOrder")
    public void deleteOrder(@QueryParam("id") Long id){
        
    }

    //APPOINTMENTS

    @POST
    @Path("/makeAppointment")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> makeAppointment(makeAppointment dto){
        return engineeringService.makeAppointment(dto);
    }  

    @DELETE
    @Path("/deleteAppointment")
    public void deleteAppointment(@QueryParam("id") Long id){
        
    }  

    @PUT
    @Path("/editAppointment")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> editAppointment(editAppointment dto){
        return engineeringService.editAppointment(dto);
    }  

    @POST
    @Path("/confirmAppointment")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public void confirmAppointment(confirmAppointment dto){
        engineeringService.confirmAppointment(dto);
    }

    @GET
    @Path("/appointment")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> getAppointment(@QueryParam("apID") Long apID){
        return engineeringService.getAppointment(apID);
    }

    //CUSTOMER

    @POST
    @Path("/makeCustomer")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> makeCustomer(makeCustomer dto){
        return engineeringService.makeCustomer(dto);
    }

    @DELETE
    @Path("/deleteCustomer")
    public void deleteCustomer(@QueryParam("name") String name){
        
    }  

    @GET
    @Path("/getAllCustomer")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<String> test(){
        return bikeRepository.getAllName();
    }

    //RENTED BIKE

    @POST
    @Path("/rentBike")
    public void rentBike(rentBike dto){
        engineeringService.rentBike(dto);
    }

    @POST
    @Path("/confirmRental")
    public void confirmRental(confirmRental dto){
        engineeringService.confirmRental(dto);
    }

    @DELETE
    @Path("/deleteRentedBike")
    public void deleteRentedBike(@QueryParam("name") String name){
        
    } 

}
