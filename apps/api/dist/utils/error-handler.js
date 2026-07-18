import { ZodError } from "zod";
import { AppError } from "./errors.js";
export function errorHandler(error, request, reply) {
    if (error instanceof ZodError) {
        return reply.status(400).send({ message: "Validation error", issues: error.issues });
    }
    if (error instanceof AppError) {
        return reply.status(error.statusCode).send({ message: error.message });
    }
    request.log.error(error);
    return reply.status(500).send({ message: "Internal server error" });
}
//# sourceMappingURL=error-handler.js.map