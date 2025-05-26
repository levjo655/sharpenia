package com.sharpnia.services;

import com.sharpnia.models.User;
import com.sharpnia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public User createUser (User user) {
        return userRepository.save(user);

    }
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        try {
            return userRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            System.out.println("Could not find the requested user");
            throw new RuntimeException();
        }
    }
    public User updateUser(int id, User updatedUser) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + id));

        existingUser.setUserName(updatedUser.getUserName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPassword(updatedUser.getPassword());

        return userRepository.save(existingUser);
    }

    @DeleteMapping("/{id}")
    public String deleteUser (int id){
        userRepository.deleteById(id);
        return "User deleted";
    }
}

