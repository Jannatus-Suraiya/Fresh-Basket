import { CartService } from './cart.service';
import { AddToCartDto } from '../DTOs/add-to-cart.dto';
import { DeleteFromCartDto } from '../DTOs/delete-from-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(addToCartDto: AddToCartDto): Promise<any>;
    deleteFromCart(deleteFromCartDto: DeleteFromCartDto): Promise<any>;
}
