import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"

interface RegisterAddressUseCaseRequest {
    street:string
    city: string
    uf:string
    neighborhood: string
    user_id:string
}

export class RegisterAddressUseCase {
    async execute({city, neighborhood, street, uf, user_id}: RegisterAddressUseCaseRequest){

    if(!user_id) {
        throw new Error('User id required')
    }

    const user = await prisma.user.findUnique({where: {id: user_id}})
    if(!user){
        throw new Error('User not exists')
    } 

    const address = await prisma.address.create({
        data: {
            city,
            neighborhood,
            street,
            uf,
            user_id
        }
    })

    return address
        
    }
}