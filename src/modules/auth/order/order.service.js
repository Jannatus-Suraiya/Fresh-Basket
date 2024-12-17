"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("../../entities/order.entity");
let OrderService = class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async checkout(createOrderDto) {
        const { userId, paymentMethod, status, totalPrice, deliveryAddress, deliveryDate, } = createOrderDto;
        const order = this.orderRepository.create({
            userId,
            paymentMethod,
            status,
            totalPrice,
            deliveryAddress,
            deliveryDate,
            orderDate: new Date(),
        });
        return this.orderRepository.save(order);
    }
    async searchOrders(searchOrderDto) {
        const { userId, paymentMethod, status, minTotalPrice, maxTotalPrice, startDate, endDate, } = searchOrderDto;
        const query = this.orderRepository.createQueryBuilder('order');
        if (userId) {
            query.andWhere('order.userId = :userId', { userId });
        }
        if (paymentMethod) {
            query.andWhere('order.paymentMethod = :paymentMethod', { paymentMethod });
        }
        if (status) {
            query.andWhere('order.status = :status', { status });
        }
        if (minTotalPrice) {
            query.andWhere('order.totalPrice >= :minTotalPrice', { minTotalPrice });
        }
        if (maxTotalPrice) {
            query.andWhere('order.totalPrice <= :maxTotalPrice', { maxTotalPrice });
        }
        if (startDate) {
            query.andWhere('order.orderDate >= :startDate', { startDate });
        }
        if (endDate) {
            query.andWhere('order.orderDate <= :endDate', { endDate });
        }
        return query.getMany();
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderService);
//# sourceMappingURL=order.service.js.map