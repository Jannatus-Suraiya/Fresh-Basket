import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { User } from './user.entity';
  import { CreateUserDto } from './dtos/create-user.dto';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    // Get all users
    @Get()
    findAll(): Promise<User[]> {
      return this.userService.findAll();
    }
  
    // Get a single user by ID
    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
      return this.userService.findOne(+id);
    }
  
    // Create a new user
   
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
      const user = new User();
      user.username = createUserDto.username;
      user.email = createUserDto.email;
      user.password = createUserDto.password; // Hash the password if needed
      return this.userService.create(user);
    }

  
    // Update an existing user
    @Patch(':id')
    update(@Param('id') id: string, @Body() user: Partial<User>): Promise<User> {
      return this.userService.update(+id, user);
    }
  
    // Delete a user
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.userService.remove(+id);
    }
  }

  
  