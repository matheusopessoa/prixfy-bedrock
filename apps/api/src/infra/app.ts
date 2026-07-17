import fastify from 'fastify';
import { healthRoutes } from './http/routes/health-routes.js';

export const app = fastify({
  logger: true,
});

app.register(healthRoutes, { prefix: '/api' });