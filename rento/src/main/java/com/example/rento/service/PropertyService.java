package com.example.rento.service;

import com.example.rento.controller.PropertyController;
import com.example.rento.entity.Property;
import com.example.rento.repository.PropertyRepository;
import com.example.rento.repository.RoomRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {
	private static final Logger logger = LoggerFactory.getLogger(PropertyController.class);

    @Autowired
    private PropertyRepository propertyRepository;
    @Autowired
    private RoomRepository roomRepository;
    
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Property saveProperty(Property property) {
        return propertyRepository.save(property);
    }

    public void deleteProperty(Long id) {
		roomRepository.deleteById(id);
		propertyRepository.deleteById(id);
	}

}