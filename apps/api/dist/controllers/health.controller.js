import { healthService } from "../services/health.service.js";
export async function checkHealth(_request, reply) {
    const result = healthService.check();
    return reply.status(200).send(result);
}
//# sourceMappingURL=health.controller.js.map