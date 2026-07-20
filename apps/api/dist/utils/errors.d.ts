export declare class AppError extends Error {
    readonly statusCode: number;
    constructor(message: string, statusCode?: number);
}
export declare class UserAlreadyExistsError extends AppError {
    constructor(email: string);
}
export declare class UnauthorizedError extends Error {
    constructor();
}
export declare class InvalidEnvironmentError extends AppError {
    constructor(issues: Record<string, string[] | undefined>);
}
//# sourceMappingURL=errors.d.ts.map