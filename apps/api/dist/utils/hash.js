import bcrypt from "bcryptjs";
const SALT_ROUNDS = 10;
export function hash(plain) {
    return bcrypt.hash(plain, SALT_ROUNDS);
}
export function compare(plain, hashed) {
    return bcrypt.compare(plain, hashed);
}
//# sourceMappingURL=hash.js.map