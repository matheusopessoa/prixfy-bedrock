export class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 400,
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class UserAlreadyExistsError extends AppError {
  constructor(email: string) {
    super(`User with email "${email}" already exists`, 409);
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super(`Unauthorized for this action`)
  }
}

