import { Prisma, User } from "@prisma/client";
import { UserRepositorie } from "../user-repository";
import { prisma } from "@/lib/prisma";

export class PrismaUserRepositorie implements UserRepositorie {
    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = await prisma.user.create({ data })
        return user
    }
    async findOne(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({where: {id}})
        return user
    }

}