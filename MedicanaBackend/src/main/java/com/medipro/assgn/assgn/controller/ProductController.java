package com.medipro.assgn.assgn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medipro.assgn.assgn.beans.Login;
import com.medipro.assgn.assgn.beans.Product;

import com.medipro.assgn.assgn.service.ProductService;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	ProductService pservice;

	//http://localhost:8686/product/productlist
	@GetMapping("/productlist")
	public List<Product> listAllPrd() {
		return pservice.listAllPrd();
	}

	//http://localhost:8686/product/productavalist
	@GetMapping("/productavalist")
	public List<Product> ListAvaPrd() {
		return pservice.ListAvaPrd();
	}

	//http://localhost:8686/product/addProduct
	@PostMapping("/addProduct") 
	public int addProduct(@RequestBody Product product)
	{ 
		pservice.addProduct(product);
		return product.getPid();
	}

	//http://localhost:8686/product/delProduct
	@DeleteMapping("/delProduct/{pid}") 
	public List<Product> delProduct(@PathVariable("pid") int pid) {	
		return pservice.delProduct(pid); 
	}

	//http://localhost:8686/product/editProduct
	@PostMapping("/editProduct/{pid}") 
	public List<Product> editProduct(@PathVariable("pid") int pid,@RequestBody Product product) 
	{ 
		return pservice.editProduct(pid,product); 
	}

	//http://localhost:8686/product/toggleProduct - set status='A'
	@PostMapping("/toggleProduct/{pid}") 
	public List<Product> toggleProduct(@PathVariable("pid") int pid) 
	{ 
		return pservice.toggleProduct(pid); 
	}
	
	//http://localhost:8686/product/toggleProduct - set status='N'
	@PostMapping("/toggleProductSecond/{pid}") 
	public List<Product> toggleProductSecond(@PathVariable("pid") int pid) 
	{ 
		return pservice.toggleProductSecond(pid); 
	}

	//categories
	
	//http://localhost:8686/product/Antibiotic
	@GetMapping("/Antibiotic")
	public List Antibiotic() {
		return pservice.Antibiotic();
	}
	
	//http://localhost:8686/product/INSULIN
	@GetMapping("/INSULIN")
	public List INSULIN() {
		return pservice.INSULIN();
	}

	//http://localhost:8686/product/SYRUP
	@GetMapping("/SYRUP")
	public List SYRUP() {
		return pservice.SYRUP();
	}
		
}
