package com.daniel.dbdeliver.entities.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.daniel.dbdeliver.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	@Query("SELECT obj FROM Product obj ORDER BY obj.name ASC")
	List<Product> findAllProduct();
	
	/*

	 com query method da spring jpa 
	 
	 List<Product> findAllByOrderByNameAsc();
	 
	 */

}
