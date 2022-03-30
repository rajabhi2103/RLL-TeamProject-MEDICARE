package com.medipro.assgn.assgn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medipro.assgn.assgn.beans.Cart;
import com.medipro.assgn.assgn.beans.Product;
import com.medipro.assgn.assgn.service.CartService;
import com.medipro.assgn.assgn.service.ProductService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	CartService cservice;

	//http://localhost:8686/cart/cartlist
	@GetMapping("/cartlist")
	public List listAllPrdinCart() {
		return cservice.listAllPrdinCart();
	}
	
	//http://localhost:8686/cart/cartlistbyloginsid
	@GetMapping("/cartlistbyloginsid/{id}")
	public List cartlistbyloginsid(@PathVariable("id") int id) {
		return cservice.cartlistbyloginsid(id);
	}
	
	//http://localhost:8686/cart/addToCart
	@PostMapping("/addToCart")
	public int addToCart(@RequestBody Cart cart) {
		return cservice.addToCart(cart);
	}
	
	//http://localhost:8686/cart/sumofproduct
	@GetMapping("/sumofproduct/{id}")
	public List sumofproduct(@PathVariable("id") int id) {
		return cservice.sumofproduct(id);
	}
	
//	//http://localhost:8686/cart/updateaddone/{pid}/{lid}/{prd_qty}
//	@PostMapping("/updateaddone/{pid}/{lid}/{prd_qty}")
//	public List updateaddone(@PathVariable("pid") int pid,@PathVariable("lid") int lid,@PathVariable("prd_qty") int prd_qty) {
//		return cservice.updateaddone(pid,lid,prd_qty);
//	}
//	
//	//http://localhost:8686/cart/updateaddonebutton/{pid}/{lid}
//	@PostMapping("/updateaddonebutton/{pid}/{lid}")
//	public List updateaddonebutton(@PathVariable("pid") int pid,@PathVariable("lid") int lid) {
//		return cservice.updateaddonebutton(pid,lid);
//	}
//	
//	//http://localhost:8686/cart/updatesubonebutton/{pid}/{lid}
//	@PostMapping("/updatesubonebutton/{pid}/{lid}")
//	public List updatesubonebutton(int pid, int lid) {
//		return cservice.updatesubonebutton(pid,lid);
//	}
//	
	//http://localhost:8686/cart/bookedProducts/
	@GetMapping("/bookedProducts/{id}")
	public List<Cart> bookedProducts(@PathVariable("id") int id) {
		return cservice.bookedProducts(id);
	}
	
	//http://localhost:8686/cart/makebooking/
	@PutMapping("/makebooking/{id}")
	public List makebooking(@PathVariable("id") int id) {
	return cservice.makebooking(id);
	}
	
	
	//sumOfPrdAndQty
	//http://localhost:8686/cart/sumOfPrdAndQty/{lid}
	@PostMapping("/sumOfPrdAndQty/{lid}")
	public List sumOfPrdAndQty(int lid) {
		return cservice.sumOfPrdAndQty(lid);
	}
	
	// delete from cart where logins_id = 163 and products_id = 40;
	//http://localhost:8686/cart/delProductfromCart/{lid}/{pid}
	@DeleteMapping("/delProductfromCart/{pid}")
	public List delProductfromCart(@PathVariable("pid") int pid) {
		return cservice.delProductfromCart(pid);
	}
	
	//update print as p
	//http://localhost:8686/cart/forprint/
	@PutMapping("/forprint/{id}")
	public List forprint(@PathVariable("id") int id) {
		return cservice.forprint(id);
	}
	
	//update print as '' 
	//http://localhost:8686/cart/forprint/
	@PutMapping("/fornotprint/{id}")
	public List fornotprint(@PathVariable("id") int id) {
		return cservice.fornotprint(id);
	}
	
	//select * from medical_products where pname = 'Vishwas';
	//http://localhost:8686/cart/search/
	@PutMapping("/search/{name}")
	public List search(@PathVariable("name") String name) {
		return cservice.search(name);
	}
	
	//making categories
	
	//http://localhost:8686/cart/Antibiotic/
	@GetMapping("/Antibiotic")
	public List Antibiotic() {
		return cservice.Antibiotic();
	}
	
	
	
	
}
