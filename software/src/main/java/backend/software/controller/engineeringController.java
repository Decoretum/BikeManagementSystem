package backend.software.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
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
import backend.software.models.RentedBike;
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
    public ArrayList<String> getBikesAvailable(){
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

    @GET
    @Path("/getCategory")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public Categories getCategory(@QueryParam("categID") Long categID){
        return engineeringService.getCategory(categID);
    }

    @DELETE
    @Path("/deleteCategory")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public void deleteCategory(@QueryParam("categID") Long categID){
        engineeringService.deleteCategory(categID);
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
    public HashMap<Object, Object> confirmOrder(@QueryParam("orderID") Long orderID){
        return engineeringService.confirmOrder(orderID);
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

    @PUT
    @Path("/confirmAppointment")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public String confirmAppointment(@QueryParam("appID") Long appID){
        return engineeringService.confirmAppointment(appID);
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

    @GET
    @Path("/getCustomer")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public Customer getCustomer(@QueryParam("customerID") Long customerID){
        return engineeringService.getCustomer(customerID);
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
    public String deleteCustomer(@QueryParam("customerID") Long customerID){
        return engineeringService.deleteCustomer(customerID);
    }  

    @GET
    @Path("/getAllCustomer")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public List<Customer> getAllCustomer(){
        return engineeringService.getAllCustomer();
    }

    @GET
    @Path("/getAllCustomerNames")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<String> getAllCustomerNames(){
        return engineeringService.getAllCustomerNames();
    }

    //RENTED BIKE

    @GET
    @Path("/getAllRentals")
    public List<Object> getAllRentals(){
        return engineeringService.getAllRentals();
    }

    @GET
    @Path("/getRental")
    @Produces(MediaType.APPLICATION_JSON_VALUE)
    public RentedBike getRental(@QueryParam("rentID") Long rentID){
        return engineeringService.getRental(rentID);
    }

    @POST
    @Path("/rentBike")
    @Consumes(MediaType.APPLICATION_JSON_VALUE)
    public String rentBike(rentBike dto){
        return engineeringService.rentBike(dto);
    }

    @POST
    @Path("/confirmRental")
    public String confirmRental(@QueryParam("rentID")Long rentID){
        return engineeringService.confirmRental(rentID);
    }

    @DELETE
    @Path("/deleteRentedBike")
    public String deleteRentedBike(@QueryParam("rentedBikeID") Long rentedBikeID){
        return engineeringService.deleteRental(rentedBikeID);
    } 

}
