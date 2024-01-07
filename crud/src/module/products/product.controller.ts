import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ReponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/model/product.model";
import { ProductDto } from "src/dto/product.dto";

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    getProducts(): ReponseData<Product[]> {
        try {
            return new ReponseData<Product[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }
    @Post()
    createProduct(@Body(new ValidationPipe()) productDto: ProductDto): ReponseData<ProductDto> {
        try {
            return new ReponseData<Product>(this.productService.createProduct(productDto)
                , HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }
    @Get('/:id')
    detailProduct(@Param('id') id: number): ReponseData<Product> {
        try {
            return new ReponseData<Product>(this.productService.detailProduct(id)
                , HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }
    @Put('/:id')
    updateProduct(@Body() ProductDto: ProductDto, @Param('id') id: number): ReponseData<Product> {
        try {
            return new ReponseData<Product>(this.productService.updateProduct(ProductDto, id)
                , HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }
    @Delete('/:id')
    deleteProduct(@Param('id') id: number): ReponseData<boolean> {
        try {
            return new ReponseData<boolean>(this.productService.deleteProduct(id)
                , HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<boolean>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }
}