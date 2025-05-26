package com.sharpnia.services;

import com.sharpnia.models.Order;
import com.sharpnia.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(String orderId) {
        try {
            return orderRepository.findById(Long.valueOf(orderId)).orElseThrow();
        } catch (NoSuchElementException e) {
            System.out.println("could not find order with id " + orderId);
            throw new RuntimeException(e);
        }
    }
    public Order updateOrder(String id, Order updatedOrder) {
        Order existingOrder = orderRepository.findById(Long.parseLong(id))
                .orElseThrow(() -> new NoSuchElementException("Order not found with id: " + id));

        existingOrder.setCustomerName(updatedOrder.getCustomerName());
        existingOrder.setSharpeningTypes(updatedOrder.getSharpeningTypes());
        existingOrder.setStatus(updatedOrder.getStatus());
        existingOrder.setPrice(updatedOrder.getPrice());

        return orderRepository.save(existingOrder);
    }

    public void deleteOrder(String id) {
        Long orderId = Long.parseLong(id);
        if (!orderRepository.existsById(orderId)) {
            throw new NoSuchElementException("Order not found with id: " + id);
        }
        orderRepository.deleteById(orderId);
    }

}
