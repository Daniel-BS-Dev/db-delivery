package com.daniel.dbdeliver.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniel.dbdeliver.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

}
