package com.example.rento.service;

import com.example.rento.entity.Room;
import com.example.rento.repository.RoomRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public Optional<Room> getRoomsByProperty(Long propertyId) {
        return roomRepository.findById(propertyId);
    }

    @Transactional
    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

	public List<Room> getAllRooms() {
		// TODO Auto-generated method stub
		return roomRepository.findAll();
	}
}

