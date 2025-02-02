import { RegisterUseCase } from '@/use-cases/register'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
export async function register(req: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        firstname: z.string().min(2),
        lastname: z.string(),
        phone: z.string(),
        username: z.string(),
        password: z.string(),
        email: z.string().email()
    })

    const { firstname, lastname, phone, email, password, username } = registerBodySchema.parse(req.body)
    
    try {
        
        const registerUseCase = new RegisterUseCase()
        const user = await registerUseCase.execute({ firstname, lastname, phone, email, password, username })
        return reply.status(201).send()
    } catch (error) {
        console.log(error)
        return
        
    }
}