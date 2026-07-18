export class AppError extends Error {
    statusCode;
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}
export class UserAlreadyExistsError extends AppError {
    constructor(email) {
        super(`User with email "${email}" already exists`, 409);
    }
}
//# sourceMappingURL=errors.js.map