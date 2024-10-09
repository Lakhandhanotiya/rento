package com.example.rento.controller;
import com.example.rento.entity.Room;
import com.example.rento.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @GetMapping("/allrooms/{propertyId}")
    public List<Room> getRoomsByProperty(@PathVariable Long propertyId) {
        return roomService.getRoomsByProperty(propertyId);
    }

    @PostMapping("/addrooms")
    public Room createRoom(@RequestBody Room room) {
        return roomService.saveRoom(room);
    }
    @GetMapping("/allrooms")
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }
   
}
