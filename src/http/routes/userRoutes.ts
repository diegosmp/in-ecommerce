import { FastifyInstance } from 'fastify'
import { register } from '../controllers/register'
import { registerAddress } from '../controllers/registerAddress'

export async function userRoutes (app: FastifyInstance){
    app.post('/user/save', register)
    app.post('/user/address/save', registerAddress)
}