import { Repository } from 'typeorm';
import { Order } from 'src/entities/order.entity';
import { CreateOrderDto } from '../DTOs/create-order.dto';
import { SearchOrderDto } from '../DTOs/search-order.dto';
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    checkout(createOrderDto: CreateOrderDto): Promise<Order>;
    searchOrders(searchOrderDto: SearchOrderDto): Promise<Order[]>;
}
