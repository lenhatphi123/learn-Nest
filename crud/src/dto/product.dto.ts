import { IsNotEmpty, IsNumber, MinLength } from 'class-validator'
export class ProductDto {
    @IsNotEmpty({ message: "ko được để trống" })
    categoryId?: number;
    @MinLength(5, { message: 'This field must be than 5 character PhiLN' })
    productName?: string;
    @IsNumber()
    price?: number;
}