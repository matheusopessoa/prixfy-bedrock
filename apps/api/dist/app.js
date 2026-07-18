import fastify from "fastify";
import { healthRoutes } from "./routes/health.routes.js";
import { authRoutes } from "./routes/auth.routes.js";
import { errorHandler } from "./utils/error-handler.js";
export const app = fastify({
    logger: true,
});
app.setErrorHandler(errorHandler);
app.register(healthRoutes, { prefix: "/api" }); // HEALTH
app.register(authRoutes, { prefix: "/api" }); // USER
//# sourceMappingURL=app.js.map