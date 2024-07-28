type Param = {
  name: string,
  type: "varchar" | "int",
  value: string | number | undefined
}

interface Query {
  sql: string,
  params: Param[]
}

interface StmtParam {
  [key: string]: string | number | undefined
}

export {Param, Query, StmtParam}
