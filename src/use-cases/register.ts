import { prisma } from "@/lib/prisma"
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
    async execute({email,firstname,lastname,password,phone,username}: RegisterUseCaseRequest){

        const password_hash = await hash(password, 6)
        await prisma.user.create({
            data: {
                firstname,
                lastname,
                phone,
                email,
                password_hash,
                username
            }
        })
    }
}