import type { FastifyRequest, FastifyReply } from 'fastify';
import { CheckHealthUseCase } from '../../../application/use-cases/check-health-use-case.js';

export class HealthController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // Em um cenário real, você usaria um Container de Injeção de Dependências (DI) ou Factories aqui
    const checkHealthUseCase = new CheckHealthUseCase();
    
    const result = await checkHealthUseCase.execute();

    return reply.status(200).send(result);
  }
}