import { PrismaUsersRepositorie } from "@/repositories/prisma/prisma-user-repository"
import { AuthenticateUseCase } from "../authenticate"

export function makeAuthenticateUseCase() {
    const usersRepository = new PrismaUsersRepositorie()
    const authenticateUseCase = new AuthenticateUseCase(usersRepository)

    return authenticateUseCase
}