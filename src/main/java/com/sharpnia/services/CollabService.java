package com.sharpnia.services;

import com.sharpnia.models.Collab;
import com.sharpnia.repository.CollabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CollabService {
    @Autowired
    private CollabRepository collabRepository;
    public Collab create (Collab collab){
        return collabRepository.save(collab);
    }
    public List<Collab> getAll() {
        return collabRepository.findAll();
    }
    public Optional<Collab> getById(Long id) {
        return collabRepository.findById(id);
    }
    public void deleteById(Long id) {
        collabRepository.deleteById(id);
    }
    public Collab update( Long id, Collab updated) {
        Collab existing = collabRepository.findById(id).orElseThrow(() -> new RuntimeException("Collab not found"));
        existing.setName(updated.getName());
        existing.setDescription(updated.getDescription());
        existing.setWebsite(updated.getWebsite());
        existing.setInstagramHandle(updated.getInstagramHandle());
        existing.setLogoUrl(updated.getLogoUrl());
        return collabRepository.save(existing);

    }
}
