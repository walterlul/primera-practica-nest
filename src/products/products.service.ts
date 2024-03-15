import { Injectable } from '@nestjs/common';
import { Product, ProductType } from './product.entity';
import { v4 } from 'uuid';
import { updateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  private products:Product[] = [
    {
      id: '1',
      name: 'Bidonsito',
      price: 100,
      type: ProductType.BIDON
    }
  ]
  getAllProducts() {
    return this.products
  }
  createProduct(name:string, price:number, type: ProductType): Product {
    const newProduct = {
      id: v4(),
      name,
      price,
      type
    }
    this.products.push(newProduct)
    return newProduct
  }
  deleteProduct(id: string) {
    this.products = this.products.filter(product => product.id !== id)
  }

  getProductById(id: string): Product{
    return this.products.find(product => product.id === id)
  }

  updateProduct(id: string, updateFields: updateProductDto): Product {
    const product = this.getProductById(id)
    const newProduct = Object.assign(product, updateFields)
    this.products = this.products.map(product => product.id === id ? newProduct   : product)
    return newProduct
  }
}
