import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/categories.interface';
import { Products } from 'src/app/models/products.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  public products: Products[] | undefined;

  constructor (private productsService: ProductsService, private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart();
  }

  ngOnInit(): void {

    this.productsService.mapProductsCategories().subscribe({
      next: (data: Products[]) => {
        this.products = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    })

  }

}
