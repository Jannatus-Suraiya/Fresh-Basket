import { Repository } from 'typeorm';
import { Category } from 'src/entities/category.entity';
import { CreateCategoryDto } from 'src/modules/DTOs/create-category.dto';
import { UpdateCategoryDto } from 'src/modules/DTOs/update-category.dto';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    create(data: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, data: UpdateCategoryDto): Promise<Category>;
    remove(id: number): Promise<void>;
}
