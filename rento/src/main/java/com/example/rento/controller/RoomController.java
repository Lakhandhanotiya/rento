package com.example.rento.controller;
import com.example.rento.entity.Room;
import com.example.rento.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/room")
public class RoomController {	
    @Autowired
    private RoomService roomService;

    @GetMapping("/allrooms/{propertyId}")
    public Optional<Room> getRoomsByProperty(@PathVariable Long propertyId) {
    	System.out.println("propertyId : "+propertyId);
        return roomService.getRoomsByProperty(propertyId);
    }

    @PostMapping("/addroom")
    public Room createRoom(@RequestBody Room room) {
        return roomService.saveRoom(room);
    }
    @GetMapping("/allrooms")
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }	
   
}
