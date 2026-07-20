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
export class UnauthorizedError extends Error {
    constructor() {
        super(`Unauthorized for this action`);
    }
}
export class InvalidEnvironmentError extends AppError {
    constructor(issues) {
        const details = Object.entries(issues)
            .map(([variable, messages]) => `${variable} (${messages?.join(", ")})`)
            .join("; ");
        super(`Invalid environment variables: ${details}`, 500);
    }
}
//# sourceMappingURL=errors.js.map