import {mssql, config} from '../../../config/db_connection_mssql'
import { Query, Param, StmtParam } from './query.interface'


async function mssqlQuery(query: string) {
  try {
    console.log('mssql - tentando conexão')
    const pool = await mssql.connect(config)
    console.log('mssql - conectado com sucesso')
    const result: mssql.IRecordSet<any> = (await pool.query(query)).recordset
    return result

  } catch (e) {
    console.log(e)
  }
}

async function mssqlStmtQuery(query: Query) {
  if(query.params.find(param => param.value === undefined)) return "os parâmetros não foram informados."
  try {
      console.log('mssql - tentando conexão')
      const pool = await mssql.connect(config)
      console.log('mssql - conectado com sucesso')
      const stmt = new mssql.PreparedStatement(pool)
      const stmtParams: StmtParam = {}
      query.params.forEach((param: Param) => {
          stmtParams[param.name] = param.value
          if (param.type === 'varchar') {
              stmt.input(param.name, mssql.VarChar)
          }
          if (param.type === 'int') {
              stmt.input(param.name, mssql.Int)
          }
      })
      await stmt.prepare(query.sql)
      const result = (await stmt.execute(stmtParams)).recordset
      
      pool.close()
      return result
  } finally {

  }

}

export {mssqlQuery, mssqlStmtQuery}