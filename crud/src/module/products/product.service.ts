
import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/model/product.model';

@Injectable()
export class ProductService {

    private products: Product[] = [
        { id: 1, categoryId: 2, price: 80000, productName: 'KeyBoard' },
        { id: 3, categoryId: 2, price: 40000, productName: 'Nice Dev' }
    ]

    getProducts(): Product[] {
        return this.products;
    }
    detailProduct(id: number): Product {
        return this.products.find(item => item.id === Number(id));
    }
    createProduct(productDto: ProductDto): Product {
        const product: Product = { id: Math.random(), ...productDto }
        this.products.push(product)
        return product;
    }
    updateProduct(ProductDto: ProductDto, id: number): Product {
        const index = this.products.findIndex(item => item.id === Number(id))
        this.products[index].categoryId = ProductDto.categoryId
        this.products[index].productName = ProductDto.productName
        this.products[index].price = ProductDto.price
        return this.products[index]
    }
    deleteProduct(id: number): boolean {
        const index = this.products.findIndex(item => item.id === Number(id))
        if (index !== -1) {
            this.products.splice(index, 1)
            return true
        } else return false
    }
}