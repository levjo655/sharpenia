package com.sharpnia.controllers;

import com.sharpnia.models.Order;
import com.sharpnia.repository.OrderRepository;
import com.sharpnia.services.OrderService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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

    @GetMapping()
    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

}
