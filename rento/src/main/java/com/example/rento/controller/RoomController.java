package com.example.rento.controller;

import com.example.rento.entity.Room;
import com.example.rento.service.RoomService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room")
public class RoomController {

    private static final Logger logger = LoggerFactory.getLogger(RoomController.class);

    @Autowired
    private RoomService roomService;

    @GetMapping("/allrooms/{propertyId}")
    public List<Room> getRoomsByProperty(@PathVariable Long propertyId) {
        logger.info("Fetching rooms for Property ID: {}", propertyId);
        List<Room> rooms = roomService.getRoomsByProperty(propertyId);
        logger.info("Fetched {} rooms for Property ID: {}. Rooms: {}", rooms.size(), propertyId, rooms);
        return rooms;
    }

    @PostMapping("/addroom")
    public Room createRoom(@RequestBody Room room) {
        logger.info("Creating new Room: {}", room);
        Room savedRoom = roomService.saveRoom(room);
        logger.info("Room created successfully with ID: {}", savedRoom.getRoomId());
        return savedRoom;
    }

    @GetMapping("/allrooms")
    public List<Room> getAllRooms() {
        logger.info("Fetching all rooms.");
        List<Room> rooms = roomService.getAllRooms();
        logger.info("Fetched {} rooms: {}", rooms.size(), rooms);
        return rooms;
    }
}
