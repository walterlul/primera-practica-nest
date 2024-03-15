import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProductDto, updateProductDto } from './dto/product.dto';


@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param() id: string){
    return this.productsService.getProductById(id)
  }

  //aqui new product es el dto o data transfer object 
  @Post()
  createProduct(@Body() newProduct: createProductDto){
    return this.productsService.createProduct(newProduct.name, newProduct.price, newProduct.type)
  }

  @Delete(':id')
  deleteProduct(@Param() id: string){
    return this.productsService.deleteProduct(id)
  }

  @Patch(':id')
  updateProduct(@Param() id: string, @Body() updateFields:updateProductDto) {
    return this.productsService.updateProduct(id, updateFields)
  }
}
