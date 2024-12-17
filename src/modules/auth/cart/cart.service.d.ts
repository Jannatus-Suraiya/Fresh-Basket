import { AddToCartDto } from '../DTOs/add-to-cart.dto';
import { DeleteFromCartDto } from '../DTOs/delete-from-cart.dto';
export declare class CartService {
    private carts;
    addProductToCart(addToCartDto: AddToCartDto): Promise<any>;
    deleteProductFromCart(deleteFromCartDto: DeleteFromCartDto): Promise<any>;
}
