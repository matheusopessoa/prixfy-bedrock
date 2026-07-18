import { checkHealth } from "../controllers/health.controller.js";
export async function healthRoutes(app) {
    app.get("/health", checkHealth);
}
//# sourceMappingURL=health.routes.js.map