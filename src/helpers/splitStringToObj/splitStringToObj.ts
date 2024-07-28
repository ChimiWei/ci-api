

export default function spliStringToObj(parameters: string) {
  if(!parameters) return {}
  const parameterArr = parameters.split(';')
  let parameterObj: Record<string, string> = {}

  parameterArr.forEach(parameter => {
    let parameterSplit =  parameter.split('=')
    parameterObj[parameterSplit[0].toLowerCase()] = parameterSplit[1]

  })

  return parameterObj
}