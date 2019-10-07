import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Fried Rice',
      expanded: true,
      products: [
        { id: 0, name: '(fr)Babat', price: '50000',  url : 'assets/1.jpg' },
        { id: 1, name: '(fr)Chicken', price: '30000', url : 'assets/2.jpg' },
        { id: 2, name: '(fr)SeaFood', price: '40000', url : 'assets/3.jpg' },
        { id: 3, name: '(fr)Sousage', price: '30000', url : 'assets/4.jpg' }
      ]
    },
    {
      category: 'Javanese Noodle',
      products: [
        { id: 4, name: '(jn)Fried', price: '40000', url : 'assets/5.jpg' },
        { id: 5, name: '(jn)Bolied', price: '40000', url : 'assets/6.jpg' }
      ]
    },
    {
      category: 'Satay',
      products: [
        { id: 6, name: '(st)Chicken', price: '10000', url : 'assets/7.jpg' },
        { id: 7, name: '(st)Intestine', price: '5000', url : 'assets/8.jpg'  },
        { id: 8, name: '(st)Egg', price: '10000', url : 'assets/9.jpg' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

  removeProduct(product){
    this.cart.splice(product);
  }
}