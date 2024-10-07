	package com.example.rento.entity;
	
	import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.JoinColumn;
	import jakarta.persistence.ManyToOne;
				
	@Entity
	public class Room {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long roomId;
	    private String name;
	    private double price;
	    private String description;
	    private String imageUrl;
	
	    @ManyToOne(cascade = CascadeType.ALL)
	    @JoinColumn(name = "property_id")
	    private Property property;
	
	    public Long getRoomId() {
			return roomId;
		}

		public void setRoomId(Long roomId) {
			this.roomId = roomId;
		}

		public String getName() {
	        return name;
	    }
	
	    public void setName(String name) {
	        this.name = name;
	    }
	
	    public double getPrice() {
	        return price;
	    }
	
	    public void setPrice(double price) {
	        this.price = price;
	    }
	
	    public String getDescription() {
	        return description;
	    }
	
	    public void setDescription(String description) {
	        this.description = description;
	    }
	
	    public String getImageUrl() {
	        return imageUrl;
	    }
	
	    public void setImageUrl(String imageUrl) {
	        this.imageUrl = imageUrl;
	    }
	
	    public Property getProperty() {
	        return property;
	    }
	
	    public void setProperty(Property property) {
	        this.property = property;
	    }
	}
