package backend.software.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import backend.software.dto.confirmAppointment;
import backend.software.dto.confirmOrder;
import backend.software.dto.confirmRental;
import backend.software.dto.deleteBikeOrder;
import backend.software.dto.editAnOrder;
import backend.software.dto.editAppointment;
import backend.software.dto.editCategory;
import backend.software.dto.editCustomer;
import backend.software.dto.makeAnOrder;
import backend.software.dto.makeAppointment;
import backend.software.dto.makeOrder;
import backend.software.dto.rentBike;
import backend.software.dto.makeBike;
import backend.software.dto.editBike;
import backend.software.dto.makeCategory;
import backend.software.dto.makeCustomer;
import backend.software.models.Appointment;
import backend.software.models.Bike;
import backend.software.models.Categories;
import backend.software.models.Customer;
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
    @Path("/getBikesAvailable")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<Bike> getBikesAvailable(){
        return engineeringService.getBikesAvailable();
    }

    @DELETE
    @Path("/deleteBike")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public void deleteBike(@QueryParam("bikeID") Long bikeID){
        engineeringService.deleteBike(bikeID);
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
    public HashMap<Object, Object> editBike(editBike dto){
        return engineeringService.editBike(dto);

    }

    //CATEGORY

    @POST
    @Path("/makeCategory")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> addCategory(makeCategory dto){
        return engineeringService.addCategory(dto);
    }

    @PUT
    @Path("/editCategory")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> editCategory(editCategory dto){
        return engineeringService.editCategory(dto);
    }

    @GET
    @Path("/getCategories")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<Categories> getCategories(){
        return engineeringService.getCategories();
    }

    @DELETE
    @Path("/deleteCategory")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public void deleteCategory(){
        
    }

    //ORDERS

    @GET
    @Path("/getOrder")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public Orders getOrder(
        @QueryParam("orderID") Long orderID
    ){
        return engineeringService.getOrder(orderID);
    }

    @GET
    @Path("/getAllOrders")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public List<Orders> getAllOrders(){
        return engineeringService.getAllOrders();
    }

    @POST
    @Path("/makeAnOrder")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public void makeOrder(makeAnOrder order){
        engineeringService.makeOrder(order);
    }

    @PUT
    @Path("/editAnOrder")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> makeOrder(editAnOrder dto){
        return engineeringService.editOrder(dto);
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
    public HashMap<String, String> makeBikeOrder(makeOrder order){
        return engineeringService.makeBikeOrder(order);
    }

    @GET
    @Path("/getBikeOrders")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<Object> getBikeOrders(@QueryParam("orderID") Long a){
        return engineeringService.getBikeOrders(a);
    }

    @DELETE
    @Path("/removeBikeOrder")
    public void deleteBikeOrder(@QueryParam("bikeOrderId") Long bikeOrderId){
        engineeringService.deleteBikeOrder(bikeOrderId);
    }

    @DELETE
    @Path("/removeOrder")
    public void deleteOrder(@QueryParam("id") Long id){
        engineeringService.removeOrder(id);
    }

    //APPOINTMENTS

    @GET
    @Path("/getAllAppointments")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public List<Appointment> getAllAppointments(){
        return engineeringService.getAllAppointments();
    }

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
        engineeringService.deleteAppointment(id);
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

    @PUT
    @Path("/editCustomer")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public HashMap<Object, Object> editCustomer(editCustomer dto){
        return engineeringService.editCustomer(dto);
    }

    //I'm not sure if this is practical in a business setting
    @DELETE
    @Path("/deleteCustomer")
    public void deleteCustomer(@QueryParam("name") String name){
        engineeringService.deleteCustomer(name);
    }  

    @GET
    @Path("/getAllCustomer")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public List<Customer> getAllCustomer(){
        return engineeringService.getAllCustomer();
    }

    //RENTED BIKE

    @GET
    @Path("/getAllRentals")
    public List<Object> getAllRentals(){
        return engineeringService.getAllRentals();
    }

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
    public void deleteRentedBike(@QueryParam("rentedBikeID") Long rentedBikeID){
        engineeringService.deleteRental(rentedBikeID);
    } 

}
