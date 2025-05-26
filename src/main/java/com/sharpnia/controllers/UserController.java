package com.sharpnia.controllers;

import com.sharpnia.models.User;
import com.sharpnia.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(value = "api/user")

public class UserController {
    @Autowired
    UserService userService;
    @PostMapping()
    public User createUserModel(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUser();
    }

    @GetMapping("{id}")
    public User getUserById(@PathVariable("id") String id) {
        try {
            return userService.getUserById(Integer.parseInt(id));
        } catch (NoSuchElementException exeption){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User user){
        return userService.updateUser(id, user);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public String deleteUser(@PathVariable int id) {
        return userService.deleteUser(id);
    }
}
