import { UsersAlreadyExistsError } from '@/use-cases/errors/users-already-exists-error'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
export async function authenticate(req: FastifyRequest, reply: FastifyReply) {
    const authenticateBodySchema = z.object({
        email: z.string().email().optional(),
        username: z.string().optional(),
        password: z.string(),
    })

    const { email, password, username } = authenticateBodySchema.parse(req.body)
    
    try {
        const authenticateUseCase = makeAuthenticateUseCase()
        await authenticateUseCase.execute({ email, password, username })

    } catch (error) {
        if(error instanceof UsersAlreadyExistsError) {
            return reply.status(409).send({ message: error.message })
        }

        return reply.status(500).send()
    }

    return reply.status(201).send()
}