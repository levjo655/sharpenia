package com.sharpnia.controllers;

import com.sharpnia.models.Order;
import com.sharpnia.repository.OrderRepository;
import com.sharpnia.services.OrderService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@Data
@RestController
@RequestMapping(value = "api/order")
public class OrderController {
    @Autowired
    OrderService orderService;
    @Autowired
    private OrderRepository orderRepository;

    @PostMapping()
    public Order createOrderModel(@RequestBody Order order){
        return orderService.createOrder(order);
    }

    @GetMapping("/all")
    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }
    @GetMapping("{id}")
    public Order getOrderById(@PathVariable("id") String id){
        try {
            return orderService.getOrderById(id);
        } catch (NoSuchElementException e) {
            throw new NoSuchElementException(id);
        }
    }
    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable("id") String id, @RequestBody Order order){
        return orderService.updateOrder(id, order);
    }

    @DeleteMapping("/{id}")
    public String deleteOrder(@PathVariable("id") String id){
        orderService.deleteOrder(id);
        return "Order deleted successfully";
    }



}
