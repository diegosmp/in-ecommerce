import { UserRepositorie } from "@/repositories/user-repositorie"
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
        const userRegister = new UserRepositorie()
        const user = await userRegister.create({email,firstname,lastname,password_hash,phone,username})

        return user
    }
}