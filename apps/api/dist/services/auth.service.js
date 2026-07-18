import { userRepository } from "../repositories/user.repository.js";
import { emailBindex } from "../utils/bindex.js";
import { UserAlreadyExistsError } from "../utils/errors.js";
import { hash } from "../utils/hash.js";
export const authService = {
    async register({ email, password, name }) {
        const bindex = emailBindex(email);
        const existingUser = await userRepository.findByEmailBindex(bindex);
        if (existingUser) {
            throw new UserAlreadyExistsError(email);
        }
        const hashedPassword = await hash(password);
        const user = await userRepository.create({
            email,
            emailBindex: bindex,
            password: hashedPassword,
            name,
            lastPasswords: [hashedPassword],
        });
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            createdAt: user.createdAt,
        };
    },
};
//# sourceMappingURL=auth.service.js.map