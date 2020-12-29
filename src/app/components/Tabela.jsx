import React from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell)

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  alinhamentoCabecalho: {
    textAlign: 'right',
  }
})

/*
function varreArray<T>(dados:T[]) {
  dados.map(elemento => {
     console.log(Object.getOwnPropertyNames(elemento))
  })
}
*/
/*
function analisaObjeto<T, K extends key of T>(obj:T, key:K) {

}
*/
/*
function analisaArray(dados:any[]) {
  dados.forEach((item, indice, array) => {
    console.log(Object.getOwnPropertyNames(item))
  })
}
*/
export default function Tabela(props) {
  const classes = useStyles()
  const cabecalho = props.cabecalho
  const dados = props.dados
  let campos = Object.getOwnPropertyNames(dados[0])

  return (
  	<div>
	    <TableContainer component={Paper}>
	      <Table className={classes.table} aria-label="customized table">
	        <TableHead>
	          <TableRow>
              {
                cabecalho.map((valor, chave) => (<StyledTableCell key={chave} align="center">{valor}</StyledTableCell>))
              }
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {
              dados.map((valor, chave) => (
              <StyledTableRow key={chave}> 
                {campos.map((campo, index) => index > 0 ? (<StyledTableCell key={index} align="center">{valor[campos[index]]}</StyledTableCell>) : null)}
              </StyledTableRow>
                )
              )
            }
	        </TableBody>
	      </Table>
	    </TableContainer>
    </div>

  )
}