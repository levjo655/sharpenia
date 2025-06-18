package com.sharpnia.controllers;

import com.sharpnia.models.Collab;
import com.sharpnia.services.CollabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/collab")

public class CollabController {
    @Autowired
    private CollabService collabService;

    @PostMapping
    public Collab create (@RequestBody Collab collab) {
        return collabService.create(collab);
    }
    @GetMapping
    public List<Collab> getCollabs() {
        return collabService.getAll();
    }
    @GetMapping("/{id}")
    public Collab getById(@PathVariable("id") Long id) {
        return collabService.getById(id).orElseThrow(null);
    }
    @PutMapping("/{id}")
    public Collab update (@PathVariable("id") Long id, @RequestBody Collab collab) {
        return collabService.update(id, collab);
    }
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        collabService.deleteById(id);
    }


}
