type Param = {
  name: string,
  type: "varchar" | "int",
  value: string | number
}

interface Query {
  sql: string,
  params: Param[]
}

interface StmtParam {
  [key: string]: string | number
}

export {Param, Query, StmtParam}
