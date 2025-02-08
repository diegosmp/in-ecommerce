import { FastifyInstance } from 'fastify'
import { registerAddress } from '../controllers/registerAddress'
import { register } from '../controllers/register'

export async function userRoutes (app: FastifyInstance){
    app.post('/user/save', register)
    app.post('/user/address/save', registerAddress)
}