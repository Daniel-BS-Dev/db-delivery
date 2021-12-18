package com.daniel.dbdeliver.entities.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniel.dbdeliver.entities.Order;
import com.daniel.dbdeliver.entities.Product;
import com.daniel.dbdeliver.entities.dto.OrderDTO;
import com.daniel.dbdeliver.entities.dto.ProductDTO;
import com.daniel.dbdeliver.entities.enums.OrderStatus;
import com.daniel.dbdeliver.entities.repositories.OrderRepository;
import com.daniel.dbdeliver.entities.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly=true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findAllWithproducts();
		return list.stream().map(x -> new OrderDTO(x, x.getProducts())).collect(Collectors.toList());
	}

	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order entity = new Order();
		entity.setAddress(dto.getAddress());
		entity.setLatitude(dto.getLatitude());
		entity.setLongitutde(dto.getLongitude());
		entity.setMoment(Instant.now());
		entity.setStatus(OrderStatus.PENDING);
		
		for(ProductDTO id: dto.getListProductDTO()) {
			Product productId = productRepository.getById(id.getId());
			entity.getProducts().add(productId);
		}
		
	    entity = repository.save(entity);
	    return new OrderDTO(entity);
	}
	
	@Transactional
	public OrderDTO update(Long id) {
		Order entity = repository.getById(id);
		entity.setStatus(OrderStatus.DELIVERED);
		entity = repository.save(entity);
		return new OrderDTO(entity);
	}

}
