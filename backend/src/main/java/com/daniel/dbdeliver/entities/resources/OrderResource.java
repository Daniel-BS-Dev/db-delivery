package com.daniel.dbdeliver.entities.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.daniel.dbdeliver.entities.dto.OrderDTO;
import com.daniel.dbdeliver.entities.services.OrderService;

@RestController
@RequestMapping(value="/orders")
public class OrderResource {
	
	@Autowired
	private OrderService service;
	
	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll(){
		List<OrderDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<OrderDTO> insert(@RequestBody OrderDTO dto){
	 dto = service.insert(dto);
	 URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
			  .buildAndExpand(dto.getId()).toUri();
	return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping("/{id}/delivered")// caminho que vai na uri
	public ResponseEntity<OrderDTO> insert(@PathVariable Long id){
	  OrderDTO dto = service.update(id);
	 return ResponseEntity.ok().body(dto);
	}

}
