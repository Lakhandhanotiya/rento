package com.example.rento.service;



import com.example.rento.entity.Property;
import com.example.rento.repository.PropertyRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {
    @Autowired
    private PropertyRepository propertyRepository;

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @Transactional
    public Property saveProperty(Property property) {
        return propertyRepository.save(property);
    }
}
