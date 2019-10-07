import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
    cart = [];
    items = [];
   
    sliderConfig = {
      slidesPerView: 1.6,
      spaceBetween: 10,
      centeredSlides: true
    };
   
    constructor(private router: Router, private cartService: CartService) { }
   
    ngOnInit() {
      this.items = this.cartService.getProducts();
      this.cart = this.cartService.getCart();
    }
   
    addToCart(product) {
      this.cartService.addProduct(product);
    }
   
    openCart() {
      this.router.navigate(['cart']);
    }
  }
