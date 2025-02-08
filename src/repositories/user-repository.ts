import { Prisma, User } from "@prisma/client";

export interface UserRepositorie {
    create(data:Prisma.UserCreateInput):Promise<User>

    findOne(id:string):Promise<User | null>
}