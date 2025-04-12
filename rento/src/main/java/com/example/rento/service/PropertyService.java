package com.example.rento.service;

import com.example.rento.entity.Property;
import com.example.rento.repository.PropertyRepository;
import com.example.rento.repository.RoomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {
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
		propertyRepository.deleteById(id);
	}
}