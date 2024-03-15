import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { ProductType } from "../product.entity";

// son los datos que envia el cliente al servidor en una peticion post por ejemplo
export class createProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    @IsNumber()
    @IsNotEmpty()
    price: number;
    @IsEnum(ProductType)
    @IsNotEmpty()
    type: ProductType;
}

export class updateProductDto {
    @IsString()
    @IsOptional()
    name?: string;
    @IsNumber()
    @IsOptional()
    price?: number;
    @IsEnum(ProductType)
    @IsOptional()
    type?: ProductType;
}