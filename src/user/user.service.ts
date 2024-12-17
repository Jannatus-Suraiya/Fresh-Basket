import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Get all users
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Get a single user by ID
  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  // Create a new user
  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  // Update an existing user
  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  // Delete a user
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
