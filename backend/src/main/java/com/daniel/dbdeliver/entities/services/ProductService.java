package com.daniel.dbdeliver.entities.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniel.dbdeliver.entities.Product;
import com.daniel.dbdeliver.entities.dto.ProductDTO;
import com.daniel.dbdeliver.entities.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly=true)
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllProduct();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

}
