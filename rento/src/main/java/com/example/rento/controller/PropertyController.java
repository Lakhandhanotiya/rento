package com.example.rento.controller;

import com.example.rento.dto.response.PropertiesResponse;
import com.example.rento.dto.response.PropertyResponse;
import com.example.rento.entity.Property;
import com.example.rento.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.apache.commons.beanutils.BeanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/property")
public class PropertyController {

	private static final Logger logger = LoggerFactory.getLogger(PropertyController.class);

	@Autowired
	private PropertyService propertyService;

	@GetMapping("/allproperties")
	public PropertiesResponse getAllProperties() {
		logger.info("Fetching all properties.");
		List<Property> properties = propertyService.getAllProperties();
		logger.info("Fetched {} properties.", properties);
		PropertiesResponse propertiesResponse = new PropertiesResponse();
		List<PropertyResponse> propertyResponses = new ArrayList<PropertyResponse>();
		try {
			// Iterate over each Property and copy its properties to PropertyResponse
			for (Property property : properties) {
				PropertyResponse propertyResponse = new PropertyResponse();
				BeanUtils.copyProperties(propertyResponse, property); // Copy individual property fields
				propertyResponses.add(propertyResponse); // Add to the response list
			}
			logger.info("Successfully copied {} properties.", propertyResponses.size());
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		propertiesResponse.setData(propertyResponses);
		return propertiesResponse;
	}

	@PostMapping("/addproperty")
	public Property createProperty(@RequestBody Property property) {
		logger.info("Creating a new property with name: {}", property.getName());
		Property savedProperty = propertyService.saveProperty(property);
		logger.info("Property created successfully with ID: {}", savedProperty.getPropertyId());
		return savedProperty;
	}

	@DeleteMapping("/deleteproperty/{id}")
	public ResponseEntity<Void> deleteProperty(@PathVariable Long id) {
		logger.info("deleting property with id: {}", id);
		propertyService.deleteProperty(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}