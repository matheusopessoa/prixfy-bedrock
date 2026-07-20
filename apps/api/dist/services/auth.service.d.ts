import type { FastifyInstance } from "fastify";
interface RegisterUserInput {
    email: string;
    password: string;
    name: string;
}
interface LoginUserInput {
    email: string;
    password: string;
}
interface PublicUser {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
}
interface LoginResponse {
    user: PublicUser;
    accessToken: string;
    refreshToken: string;
}
export declare const authService: {
    register({ email, password, name }: RegisterUserInput): Promise<PublicUser>;
    login({ email, password }: LoginUserInput, app: FastifyInstance): Promise<LoginResponse>;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map