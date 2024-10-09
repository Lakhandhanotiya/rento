package com.example.rento.service;

import com.example.rento.entity.Room;
import com.example.rento.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public List<Room> getRoomsByProperty(Long propertyId) {
        return roomRepository.findAll();
    }

    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

	public List<Room> getAllRooms() {
		// TODO Auto-generated method stub
		return roomRepository.findAll();
	}
}