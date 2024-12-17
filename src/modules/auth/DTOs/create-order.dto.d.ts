export declare class CreateOrderDto {
    userId: number;
    paymentMethod: string;
    status: string;
    totalPrice: number;
    deliveryAddress: string;
    deliveryDate?: Date;
}
