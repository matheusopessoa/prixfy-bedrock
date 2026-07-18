import { z } from "zod";
import { authService } from "../services/auth.service.js";
const registerUserBodySchema = z.object({
    email: z.email(),
    password: z.string().min(8),
    name: z.string().min(1),
});
export async function registerUser(request, reply) {
    const data = registerUserBodySchema.parse(request.body);
    const user = await authService.register(data);
    return reply.status(201).send(user);
}
//# sourceMappingURL=auth.controller.js.map