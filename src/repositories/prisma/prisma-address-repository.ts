import { Prisma, Address } from "@prisma/client";
import { AddressRepositorie } from "../address-repository";
import { prisma } from "@/lib/prisma";

export class PrismaAddressRepositorie implements AddressRepositorie {
    async create(data: Prisma.AddressUncheckedCreateInput): Promise<Address> {
        const address = await prisma.address.create({ data })
        return address
    }

}