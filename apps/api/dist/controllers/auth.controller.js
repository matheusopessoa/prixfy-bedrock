import { registerUserBodySchema, loginBodySchema } from "../utils/validators.js";
import { authService } from "../services/auth.service.js";
export async function registerUser(request, reply) {
    const data = registerUserBodySchema.parse(request.body);
    const user = await authService.register(data);
    return reply.status(201).send(user);
}
export async function loginUser(request, reply) {
    const data = loginBodySchema.parse(request.body);
    const loginData = await authService.login(data, request.server);
    return reply.status(200).send(loginData);
}
//# sourceMappingURL=auth.controller.js.map