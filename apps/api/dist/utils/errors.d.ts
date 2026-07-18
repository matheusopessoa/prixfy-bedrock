export declare class AppError extends Error {
    readonly statusCode: number;
    constructor(message: string, statusCode?: number);
}
export declare class UserAlreadyExistsError extends AppError {
    constructor(email: string);
}
//# sourceMappingURL=errors.d.ts.map