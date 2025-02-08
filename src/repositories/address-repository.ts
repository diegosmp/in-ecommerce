import { Address, Prisma } from "@prisma/client";

export interface AddressRepositorie {
    create(data: Prisma.AddressUncheckedCreateInput): Promise<Address>
}