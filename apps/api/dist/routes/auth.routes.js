import { registerUser } from "../controllers/auth.controller.js";
export async function authRoutes(app) {
    app.post("/auth", registerUser);
}
//# sourceMappingURL=auth.routes.js.map