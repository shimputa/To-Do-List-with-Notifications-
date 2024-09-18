import fp from 'fastify-plugin';
import fastifyJwt from 'fastify-jwt';

export default fp(async (fastify) => {
  fastify.register(fastifyJwt, {
    secret: 'supersecret', // Replace with a strong secret
  });

  fastify.decorate('authenticate', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
});
