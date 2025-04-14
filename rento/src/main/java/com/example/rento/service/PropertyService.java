package com.example.rento.service;

import com.example.rento.controller.PropertyController;
import com.example.rento.entity.Property;
import com.example.rento.repository.PropertyRepository;
import com.example.rento.repository.RoomRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PropertyService {
	private static final Logger logger = LoggerFactory.getLogger(PropertyService.class);

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
	@Transactional
	public void deleteProperty(Long id) {
		  logger.info("property delete method start for property id {}",id);

		roomRepository.deleteByPropertyId(id);
		  logger.info("prperty room delete successfully");
		propertyRepository.deleteById(id);
	}

}