import { FastifyRequest, FastifyReply } from "fastify"
import { mssqlStmtQuery } from "../helpers/mssql/mssqlQuery"
import queryRepo from "../helpers/mssql/query-repo"

async function handler(request: FastifyRequest, reply: FastifyReply) {
  const { codfilial } = request.query as { codfilial: string }
  const data = await mssqlStmtQuery(queryRepo.funcTotalFilial(codfilial))
  return data
}

export default { handler }