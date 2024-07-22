import { FastifyRequest, FastifyReply } from "fastify"
import { mssqlStmtQuery } from "../helpers/mssql/mssqlQuery"
import queryRepo from "../helpers/mssql/query-repo"

async function handler(request: FastifyRequest, reply: FastifyReply) {
  const { idimage } = request.query as { idimage: string }
  const data = await mssqlStmtQuery(queryRepo.imagem(idimage))
  return data
}

export default { handler }