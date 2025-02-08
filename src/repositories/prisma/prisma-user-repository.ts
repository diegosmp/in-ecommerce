import { Prisma, User } from "@prisma/client";
import { UsersRepositorie } from "../user-repository";
import { prisma } from "@/lib/prisma";

export class PrismaUsersRepositorie implements UsersRepositorie {
    async findById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({where: {id}})
        return user
    }
    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = await prisma.user.create({ data })
        return user
    }
    async findOne(email?: string, username?: string): Promise<User | null> {
        const user = await prisma.user.findUnique({where: {email, username}})
        return user
    }

}