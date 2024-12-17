import { OrderService } from './order.service';
import { CreateOrderDto } from '../DTOs/create-order.dto';
import { SearchOrderDto } from '../DTOs/search-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    checkout(createOrderDto: CreateOrderDto): Promise<import("../../entities/order.entity").Order>;
    searchOrders(searchOrderDto: SearchOrderDto): Promise<import("../../entities/order.entity").Order[]>;
}
