package com.daniel.dbdeliver.entities.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniel.dbdeliver.entities.Order;
import com.daniel.dbdeliver.entities.dto.OrderDTO;
import com.daniel.dbdeliver.entities.repositories.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;

	@Transactional(readOnly=true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findAll();
		return list.stream().map(x -> new OrderDTO(x, x.getProducts())).collect(Collectors.toList());
	}

}
