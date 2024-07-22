import { FastifyRequest, FastifyReply } from "fastify"
import { mssqlStmtQuery } from "../helpers/mssql/mssqlQuery"
import queryRepo from "../helpers/mssql/query-repo"

async function handler(request: FastifyRequest, reply: FastifyReply) {
  const { codfilial, chapa } = request.query as { codfilial: string, chapa: string }
  const data = await mssqlStmtQuery(queryRepo.funcionario(codfilial, chapa))
  return data
}

export default { handler }