"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
let CartService = class CartService {
    constructor() {
        this.carts = {};
    }
    async addProductToCart(addToCartDto) {
        const { userId, productId, quantity } = addToCartDto;
        if (!this.carts[userId]) {
            this.carts[userId] = [];
        }
        const existingProduct = this.carts[userId].find((item) => item.productId === productId);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        }
        else {
            this.carts[userId].push({ productId, quantity });
        }
        return { message: 'Product added to cart successfully', cart: this.carts[userId] };
    }
    async deleteProductFromCart(deleteFromCartDto) {
        const { userId, productId } = deleteFromCartDto;
        if (!this.carts[userId]) {
            throw new common_1.NotFoundException('Cart not found for the user');
        }
        const productIndex = this.carts[userId].findIndex((item) => item.productId === productId);
        if (productIndex === -1) {
            throw new common_1.NotFoundException('Product not found in the cart');
        }
        this.carts[userId].splice(productIndex, 1);
        return { message: 'Product removed from cart successfully', cart: this.carts[userId] };
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
//# sourceMappingURL=cart.service.js.map