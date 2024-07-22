import * as mssql from 'mssql'
import dotenv from 'dotenv'

dotenv.config()

const config: mssql.config = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  server: process.env.MSSQL_SERVER!,
  options: {
      trustedConnection: true,
      trustServerCertificate: true,
      enableArithAbort: true,
  },
}

export {mssql, config}