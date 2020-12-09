import { Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
    private users: User[] = []
    

    getAllUsers(): User[] {
        return this.users
    }

    getUser(id: string): User {
        return this.users.find(user => user.id === +id)
    }

    deleteUser(id: string): boolean {
        this.users.filter(user => user.id !== +id)
        return true
    }

    createUser(userData){
        this.users.push({
            id: this.users.length +1,
            fullName: userData.lastName + " " +userData.firstName,
            ...userData
        })
    }
}
