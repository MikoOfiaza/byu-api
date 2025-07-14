import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { createUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: any) {}
    
    @Post('create')
    @ApiBody({type: createUserDto})
    create(@Body() userCreateDto: createUserDto) {
        return this.usersService.create(createUserDto);
    }
}
