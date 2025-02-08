import { PrismaUserRepositorie } from "@/repositories/prisma/prisma-user-repository"
import { UserRepositorie } from "@/repositories/user-repository"
import { hash } from "bcryptjs"

interface RegisterUseCaseRequest {
    firstname:string
    lastname: string
    phone:string
    email: string
    password:string
    username: string
}

export class RegisterUseCase {
    constructor(private usersRepository: UserRepositorie) {

    }

    async execute({email,firstname,lastname,password,phone,username}: RegisterUseCaseRequest){

        const password_hash = await hash(password, 6)
        
        await this.usersRepository.create({email,firstname,lastname,password_hash,phone,username})

    }
}