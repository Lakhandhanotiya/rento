package com.example.rento.repository;

import com.example.rento.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.repository.query.Param;

public interface RoomRepository extends JpaRepository<Room, Long> {

    @Modifying
    @Query("DELETE FROM Room r WHERE r.property.propertyId = :propertyId")
    void deleteByPropertyId(@Param("propertyId") Long propertyId);

}
