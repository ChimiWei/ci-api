import { FastifyRequest, FastifyReply } from "fastify"
import spliStringToObj from "../helpers/splitStringToObj/splitStringToObj"


async function handler(request: FastifyRequest, reply: FastifyReply) {
  
  const { parameters } = request.query as {parameters: string}
  const parameterObj = spliStringToObj(parameters)

  return parameterObj
}

export default { handler }