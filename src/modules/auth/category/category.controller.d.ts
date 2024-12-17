import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/modules/DTOs/create-category.dto';
import { UpdateCategoryDto } from 'src/modules/DTOs/update-category.dto';
import { Category } from 'src/entities/category.entity';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(id: number): Promise<void>;
}
