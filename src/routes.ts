import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions } from "fastify"
import { funcController, funcColigadaController, funcCPFController, funcTotalController, funcIdImageController, filialController, testController, voteConfirmController } from "./controllers"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
  fastify.get('/CI.001/1/P', funcController)
  fastify.get('/CI.004/1/P', funcColigadaController)
  fastify.get('/CI.003/1/P', funcCPFController)
  fastify.get('/CI.005/1/P', funcTotalController)
  fastify.get('/CI.006/1/P', funcIdImageController)
  fastify.get('/CI.002/1/P', filialController)
  fastify.get('/CI.007/1/P', voteConfirmController)
  fastify.get('/teste', testController)
}