import { describe, it, expect } from 'vitest';
import { CheckHealthUseCase } from './check-health-use-case.js';

describe('Check Health Use Case', () => {
  it('deve retornar status ok e um timestamp', async () => {
    const checkHealthUseCase = new CheckHealthUseCase();

    const result = await checkHealthUseCase.execute();

    expect(result.status).toBe('ok');
    expect(result.timestamp).toBeInstanceOf(Date);
  });
});