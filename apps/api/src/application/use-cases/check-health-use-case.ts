interface CheckHealthResponse {
  status: string;
  timestamp: Date;
}

export class CheckHealthUseCase {
  async execute(): Promise<CheckHealthResponse> {
    return {
      status: 'ok',
      timestamp: new Date(),
    };
  }
}