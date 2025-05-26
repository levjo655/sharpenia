package com.sharpnia.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
@Table(name = "orders")
public class Order {
    public Order() {
        // Required by JPA
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    private String customerName;

    @ElementCollection(targetClass = SharpeningType.class)
    @CollectionTable(name = "order_sharpening_types", joinColumns = @JoinColumn(name = "order_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "sharpening_type")
    private List<SharpeningType> sharpeningTypes;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public List<SharpeningType> getSharpeningTypes() {
        return sharpeningTypes;
    }

    public void setSharpeningTypes(List<SharpeningType> sharpeningTypes) {
        this.sharpeningTypes = sharpeningTypes;
    }

    private String status;
    private String price;


}
