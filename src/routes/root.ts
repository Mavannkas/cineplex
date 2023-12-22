import { FastifyPluginAsync } from 'fastify'
import { rootSchema } from '../model/root.js';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', {
    schema: rootSchema
  }, async function (request, reply) {
    return { message: "TEST_CICD_YEY", root: !true }
  })
}

export default root;
