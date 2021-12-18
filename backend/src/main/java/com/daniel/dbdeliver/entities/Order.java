package com.daniel.dbdeliver.entities;

import java.io.Serializable;
import java.time.Instant;

import com.daniel.dbdeliver.entities.enums.OrderStatus;

public class Order implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String address;
	private Double latitude;
	private Double longitutde;
	private Instant moment;
	private OrderStatus status;
	
	public Order() {
	
	}

	public Order(Long id, String address, Double latitude, Double longitutde, Instant moment, OrderStatus status) {
		this.id = id;
		this.address = address;
		this.latitude = latitude;
		this.longitutde = longitutde;
		this.moment = moment;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitutde() {
		return longitutde;
	}

	public void setLongitutde(Double longitutde) {
		this.longitutde = longitutde;
	}

	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public OrderStatus getStatus() {
		return status;
	}

	public void setStatus(OrderStatus status) {
		this.status = status;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Order other = (Order) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
