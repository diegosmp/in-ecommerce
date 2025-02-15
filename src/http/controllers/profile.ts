import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeGetProfileUseCase } from '@/use-cases/factories/make-get-profile-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function profile(req: FastifyRequest, reply: FastifyReply) {  
    try {
        const getUserProfileUseCase = makeGetProfileUseCase()
        const { user } = await getUserProfileUseCase.execute({
          userId: req.user.sub
        })
        return reply.status(200).send({ 
          ...user,
          password_hash: undefined,
         })
    } catch (error) {
        if(error instanceof ResourceNotFoundError) {
            return reply.status(400).send({ message: error.message })
        }
    }
}