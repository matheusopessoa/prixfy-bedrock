import type { FastifyInstance } from "fastify";
import { registerUser, loginUser } from "../controllers/auth.controller.js";

export async function authRoutes(app: FastifyInstance) {
  app.post("/auth", registerUser);
  app.post("/login", loginUser);
}