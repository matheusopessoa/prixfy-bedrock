import { prisma } from "../utils/prisma.js";
export const userRepository = {
    findByEmailBindex(emailBindex) {
        return prisma.user.findUnique({ where: { emailBindex } });
    },
    create(data) {
        return prisma.user.create({ data });
    },
};
//# sourceMappingURL=user.repository.js.map