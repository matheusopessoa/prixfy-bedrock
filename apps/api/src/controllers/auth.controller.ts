import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { authService } from "../services/auth.service.js";

const registerUserBodySchema = z.object({
    email: z.email(),
    password: z.string().min(8),
    name: z.string().min(1),
});

const loginBodySchema = z.object({
    email: z.email(),
    password: z.string().min(8)
})

export async function registerUser(request: FastifyRequest, reply: FastifyReply) {
    const data = registerUserBodySchema.parse(request.body);
    const user = await authService.register(data);
    return reply.status(201).send(user);
}

export async function loginUser(request: FastifyRequest, reply: FastifyReply) {
    const data = loginBodySchema.parse(request.body);
    const loginData = await authService.login(data, request.server)
    return reply.status(200).send(loginData);
}