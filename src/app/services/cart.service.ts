import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cartItemCount: number = 0;

  cartUpdated = new EventEmitter<number>();

  constructor() { }

  addToCart() {
    this.cartItemCount++;
    this.cartUpdated.emit(this.cartItemCount);
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

}
