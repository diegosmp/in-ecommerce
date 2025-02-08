import { Prisma, User } from "@prisma/client";

export interface UserRepositorie {
    create(data:Prisma.UserCreateInput):Promise<User>

    findOne(email:string):Promise<User | null>
}