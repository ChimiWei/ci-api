import { Param } from "./query.interface"


const funcionario = (codfilial: string, chapa: string) => { // Dados do Funcionário
  const sql: string = `
  select F.CHAPA, F.NOME, F.CODFILIAL, S.DESCRICAO AS SECAO, PF.NOME AS FUNCAO, I.IMAGEM
  from PFUNC F
  inner join PSECAO S on S.CODCOLIGADA = F.CODCOLIGADA AND S.CODIGO = F.CODSECAO
  inner join PFUNCAO PF on PF.CODCOLIGADA = F.CODCOLIGADA AND PF.CODIGO = F.CODFUNCAO
  inner join PPESSOA P on P.CODIGO = F.CODPESSOA
  left join GIMAGEM I on I.ID = P.IDIMAGEM
  where F.CODFILIAL = @codfilial AND F.CHAPA = @chapa AND F.CODSITUACAO NOT IN ('D', 'P', 'T', 'L')`

  const params: Param[] = [
    {
      name: 'chapa',
      type: 'varchar',
      value: chapa
    },
    {
      name: 'codfilial',
      type: 'int',
      value: codfilial
    }
  ]
  return { sql, params }
}

const funcComCpf = (codfilial: string, chapa: string) => { // Dados do Funcionário
  const sql: string = `
  select F.chapa, F.nome, F.codcoligada, F.codfilial, S.DESCRICAO AS secao, right(P.CPF, 3) as confirmacao
  from PFUNC F
  inner join PPESSOA P on P.CODIGO = F.CODPESSOA
  inner join PSECAO S on S.CODCOLIGADA = F.CODCOLIGADA AND S.CODIGO = F.CODSECAO
  where F.CHAPA = @chapa and F.CODFILIAL = @codfilial`
  const params: Param[] = [
    {
      name: 'chapa',
      type: 'varchar',
      value: chapa
    },
    {
      name: 'codfilial',
      type: 'int',
      value: codfilial
    }
  ]
  return { sql, params }
}



const funcComColigada = (codfilial: string, chapa: string) => {
  const sql: string = `
  select F.CHAPA, F.NOME, F.CODCOLIGADA, F.CODFILIAL, S.DESCRICAO AS SECAO, PF.NOME AS FUNCAO, 
  GC.NOMEFANTASIA AS GCNOME, GC.RUA AS GCRUA, GC.NUMERO AS GCNUMERO, GC.BAIRRO AS GCBAIRRO, GC.CIDADE AS GCCIDADE,
  GC.ESTADO AS GCESTADO, GC.CGC AS GCCGC, GC.TELEFONE AS GCTELEFONE, P.IDIMAGEM
  
  from PFUNC F
  inner join GCOLIGADA GC on GC.CODCOLIGADA = F.CODCOLIGADA
  inner join PSECAO S on S.CODCOLIGADA = F.CODCOLIGADA AND S.CODIGO = F.CODSECAO
  inner join PFUNCAO PF on PF.CODCOLIGADA = F.CODCOLIGADA AND PF.CODIGO = F.CODFUNCAO
  inner join PPESSOA P on P.CODIGO = F.CODPESSOA
  
  where F.CODCOLIGADA = 1 AND F.CODFILIAL = @codfilial AND F.CHAPA = @chapa`

  const params: Param[] = [
    {
      name: 'chapa',
      type: 'varchar',
      value: chapa
    },
    {
      name: 'codfilial',
      type: 'int',
      value: codfilial
    }
  ]
  return { sql, params }
}



const funcTotalFilial = (codfilial: string) => {
  const sql: string = `
  select count(F.chapa) as total
  from PFUNC F
  where F.CODFILIAL = @codfilial AND F.CODSITUACAO <> 'D'
  `

  const params: Param[] = [
    {
      name: 'codfilial',
      type: 'int',
      value: codfilial
    }
  ]

  return { sql, params }

}

const imagem = (imageid: string) => {
  const sql: string = `
  select id, imagem
  from gimagem
  where id = @imageid
  `

  const params: Param[] = [
    {
      name: 'imageid',
      type: 'int',
      value: imageid
    }
  ]

  return { sql, params }

}

export default {
  funcionario,
  funcComCpf,
  funcComColigada,
  funcTotalFilial,
  imagem
}

