import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products.interface';
import { Categories } from '../models/categories.interface';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  public productosURL = "https://static.compragamer.com/test/productos.json"

  public categoriasURL = "https://static.compragamer.com/test/subcategorias.json"

  constructor(private http: HttpClient) { }

  public listarProductos(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.productosURL}`);
  }

  public obtenerCategorias(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.categoriasURL}`);
  }

  public mapProductsCategories(): Observable<Products[]> {

    const getData = forkJoin({
      getProducts: this.listarProductos(),
      getCategories: this.obtenerCategorias()
    })

    return getData.pipe (
      map((allData: any) => {

        const categoriesMap = new Map<number, string>();
        allData['getCategories'].forEach((categoria: Categories) => {
          categoriesMap.set(categoria.id, categoria.nombre);
        })

        allData['getProducts'].forEach((producto: Products) => {
          const nombreCategoria = categoriesMap.get(producto.id_subcategoria);
          if (nombreCategoria) {
            producto.nombre_categoria = nombreCategoria;
          }
        });

        return allData['getProducts']

      })
    )
  }
}
