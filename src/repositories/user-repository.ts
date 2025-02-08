import { Prisma, User } from "@prisma/client";

export interface UsersRepositorie {
    create(data:Prisma.UserCreateInput):Promise<User>

    findOne(email?:string, username?:string):Promise<User | null>
}