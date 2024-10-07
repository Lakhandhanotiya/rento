package com.example.rento.controller;

import com.example.rento.entity.Property;
import com.example.rento.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {
    @Autowired
    private PropertyService propertyService;

    @GetMapping("/allproperties")
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @PostMapping("/addproperty")
    public Property createProperty(@RequestBody Property property) {
        return propertyService.saveProperty(property);
    }
}

