import { registerUser, loginUser } from "../controllers/auth.controller.js";
export async function authRoutes(app) {
    app.post("/register", registerUser);
    app.post("/login", loginUser);
}
//# sourceMappingURL=auth.routes.js.map