package com.medipro.assgn.assgn.service;

import java.util.List;

import com.medipro.assgn.assgn.beans.Cart;
import com.medipro.assgn.assgn.beans.Product;

public interface CartService {

	List listAllPrdinCart();

	List cartlistbyloginsid(int id);

	int addToCart(Cart cart);

	List sumofproduct(int id);

	List updateaddone(int pid, int lid,int prd_qty);

	List updateaddone(int pid, int lid);

	List updateaddonebutton(int pid, int lid);

	List updatesubonebutton(int pid, int lid);

	List bookedProducts(int id);

	List makebooking(int id);

	List sumOfPrdAndQty(int lid);

	List delProductfromCart(int pid);

	List forprint(int id);

	List fornotprint(int id);

	List search(String name);

	List Antibiotic();

	

	

}
