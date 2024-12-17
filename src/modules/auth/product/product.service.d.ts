import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from 'src/modules/DTOs/create-product.dto';
import { UpdateProductDto } from 'src/modules/DTOs/update-product.dto';
import { UpdateDiscountDto } from '../DTOs/update-discount.dto';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(data: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, data: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<void>;
    updateDiscount(id: number, updateDiscountDto: UpdateDiscountDto): Promise<string>;
}
