import fastify from "fastify"
import { userRoutes } from "./http/routes/userRoutes"

export const app = fastify()

app.register(userRoutes)