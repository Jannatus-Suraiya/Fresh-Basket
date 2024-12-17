import { ProductService } from './product.service';
import { CreateProductDto } from 'src/modules/DTOs/create-product.dto';
import { UpdateProductDto } from 'src/modules/DTOs/update-product.dto';
import { Product } from 'src/entities/product.entity';
import { UpdateDiscountDto } from '../DTOs/update-discount.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<void>;
    updateDiscount(id: number, updateDiscountDto: UpdateDiscountDto): Promise<string>;
}
