import { RegisterAddressUseCase } from '@/use-cases/registerAddress'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export function registerAddress(req: FastifyRequest, reply: FastifyReply) {
    const registerAddressBodySchema = z.object({
        street: z.string(),
        city: z.string(),
        uf: z.string(),
        neighborhood: z.string(),
        user_id: z.string().uuid()
    })

    const { street, city, neighborhood, uf, user_id } = registerAddressBodySchema.parse(req.body)

    try {
        const registerAddressUseCase = new RegisterAddressUseCase()
        const address = registerAddressUseCase.execute({street, city, neighborhood, uf, user_id})

        return reply.status(201).send()
    } catch (error) {
        console.log(error)
        
    }
}