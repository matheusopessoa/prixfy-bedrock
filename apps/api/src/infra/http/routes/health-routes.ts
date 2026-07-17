import type { FastifyInstance } from 'fastify';
import { HealthController } from '../controllers/health-controller.js';

export async function healthRoutes(app: FastifyInstance) {
  const healthController = new HealthController();

  // O Fastify espera que os handlers não percam o escopo do 'this', 
  // então passamos o método fazendo o bind ou chamando dentro de uma arrow function se necessário.
  app.get('/health', healthController.handle.bind(healthController));
}