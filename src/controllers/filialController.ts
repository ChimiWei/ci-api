import { FastifyRequest, FastifyReply } from "fastify"
import { mssqlQuery } from "../helpers/mssql/mssqlQuery"


async function handler(request: FastifyRequest, reply: FastifyReply) {

  const data = await mssqlQuery('select CODCOLIGADA, CODFILIAL, NOME from gfilial where codcoligada = 1')
  return data
}

export default { handler }