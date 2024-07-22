import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions } from "fastify"
import { funcController, funcColigadaController, funcCPFController, funcTotalController, funcIdImageController, filialController } from "./controllers"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
  fastify.get('/totvs_db/func', funcController)
  fastify.get('/totvs_db/func_coligada', funcColigadaController)
  fastify.get('/totvs_db/funcCPF', funcCPFController)
  fastify.get('/totvs_db/funcTotal', funcTotalController)
  fastify.get('/totvs_db/idimagem', funcIdImageController)
  fastify.get('/totvs_db/filiais', filialController)
}