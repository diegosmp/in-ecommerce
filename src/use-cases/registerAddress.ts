import { prisma } from "@/lib/prisma"
import { AddressRepositorie } from "@/repositories/address-repository"

interface RegisterAddressUseCaseRequest {
    street:string
    city: string
    uf:string
    neighborhood: string
    user_id:string
}

export class RegisterAddressUseCase {
    constructor(private addressRepository: AddressRepositorie) {}

    async execute({city, neighborhood, street, uf, user_id}: RegisterAddressUseCaseRequest){

    if(!user_id) {
        throw new Error('User id required')
    }

    const user = await prisma.user.findUnique({where: {id: user_id}})
    if(!user){
        throw new Error('User not exists')
    } 

    const address = this.addressRepository.create({city, neighborhood, street, uf, user_id})

    return address
        
    }
}