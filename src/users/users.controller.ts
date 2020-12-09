import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    getAllUsers(): User[] {
        return this.usersService.getAllUsers()
    }

    @Get("search")
    search(@Query("user") username: string){
        return `find ${username}`
    }

    @Get()
    getUser(@Param("id") id: string):User {
        return this.usersService.getUser(id)
    }

    @Post()
    createUser(@Body() userData){
        console.log(userData)
        return this.usersService.createUser(userData)
    }

    @Delete(":id")
    deleteUser(@Param("id") id:string){
        return this.usersService.deleteUser(id)
    }

    @Patch(":id")
    patchUser(@Param("id") id: string, @Body() updateUserData){
        return {
            udpatedUser: id,
            ...updateUserData
        }
    }
}
