import type { User } from "../generated/prisma/client.js";
export interface CreateUserData {
    email: string;
    emailBindex: string;
    password: string;
    name: string;
    lastPasswords: string[];
}
export declare const userRepository: {
    findByEmailBindex(emailBindex: string): Promise<User | null>;
    create(data: CreateUserData): Promise<User>;
};
//# sourceMappingURL=user.repository.d.ts.map