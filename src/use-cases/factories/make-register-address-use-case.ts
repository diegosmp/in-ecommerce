import { PrismaAddressRepositorie } from "@/repositories/prisma/prisma-address-repository"
import { RegisterAddressUseCase } from "../registerAddress"

export function makeregisterAddressUseCase() {
    const addressRepository = new PrismaAddressRepositorie()
    const registerAddressUseCase = new RegisterAddressUseCase(addressRepository)
    
    return registerAddressUseCase
}