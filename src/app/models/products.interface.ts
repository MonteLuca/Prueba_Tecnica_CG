export interface Products {
  destacado:       number;
  nombre:          string;
  id_producto?:    number;
  id_subcategoria: number;
  nombre_categoria: string;
  precio:          number;
  imagenes:        Imagenes[];
  vendible:        number;
  stock:           number;
  garantia:        number;
  iva:             number;
}

export interface Imagenes {
  nombre:             string;
  id_producto_imagen: number;
  orden:              number;
}
