import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodID = new Date().toString();
    const newProduct = new Product(prodID, title, description, price);
    this.products.push(newProduct);
    return prodID;
  }
}
