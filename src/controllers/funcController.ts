import { FastifyRequest, FastifyReply } from "fastify"
import { mssqlStmtQuery } from "../helpers/mssql/mssqlQuery"
import queryRepo from "../helpers/mssql/query-repo"
import spliStringToObj from "../helpers/splitStringToObj/splitStringToObj"

async function handler(request: FastifyRequest, reply: FastifyReply) {
  const { parameters } = request.query as {parameters: string}
  const parameterObj = spliStringToObj(parameters)
  const data = await mssqlStmtQuery(queryRepo.funcionario(parameterObj.codfilial, parameterObj.chapa))
  return data
}

export default { handler }