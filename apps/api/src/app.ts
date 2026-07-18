import fastify from "fastify";
import { healthRoutes } from "./routes/health.routes.js";
import { authRoutes } from "./routes/auth.routes.js";
import { errorHandler } from "./utils/error-handler.js";
import fastifyJwt from "@fastify/jwt";

export const app = fastify({
  logger: true,
});

app.register(fastifyJwt, {
  secret: process.env.JWT_SIGN_SECRET!,
});

app.setErrorHandler(errorHandler);
app.register(healthRoutes, { prefix: "/api" }); // HEALTH
app.register(authRoutes, { prefix: "/api" }); // USER
