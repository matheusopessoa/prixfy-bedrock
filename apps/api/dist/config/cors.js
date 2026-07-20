import { env } from "./env.js";
const baseCorsOptions = {
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86_400,
};
// O Record garante, em tempo de compilação, que todo NODE_ENV tenha uma
// política explícita — nenhum ambiente novo nasce sem definir sua origem.
const corsPolicies = {
    // `origin: true` reflete a origem da requisição, liberando qualquer domínio.
    dev: { ...baseCorsOptions, origin: true },
    test: { ...baseCorsOptions, origin: true },
    prod: { ...baseCorsOptions, origin: env.CORS_ALLOWED_ORIGINS },
};
export const corsOptions = corsPolicies[env.NODE_ENV];
//# sourceMappingURL=cors.js.map