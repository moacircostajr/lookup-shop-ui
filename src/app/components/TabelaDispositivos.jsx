import React, { useEffect, useState } from 'react'
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router-dom'
import api from '../services/api'


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

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    table: {
    minWidth: 700,
    },
    container: {
      height: '83vh',
    },
  }),
);



export default function TabelaDispositivos() {

  const token = localStorage.getItem('tokenaiChug4e')

  const [dados, setDados] = useState([])

  useEffect(() => {
      api.get('devices', {headers: {Authorization: token}}).then(response => {
        setDados(response.data)
      })
    }, [token])


  const classes = useStyles()
  const history = useHistory()

  return (
  	<div>
	    <TableContainer component={Paper} className={classes.container}>
	      <Table className={classes.table}>
	        <TableHead>
	          <TableRow>
              <StyledTableCell align="center">Empresa</StyledTableCell>
              <StyledTableCell align="center">Dispositivo</StyledTableCell>
              <StyledTableCell align="center">Modelo</StyledTableCell>
              <StyledTableCell align="center">Bairro</StyledTableCell>
              <StyledTableCell align="center">Cidade</StyledTableCell>
              <StyledTableCell align="center">Estado</StyledTableCell>
              <StyledTableCell align="center">País</StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained" color="inherit" onClick={() => { history.push('/dispositivo') }}><AddIcon color="primary"/></Button></StyledTableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {
              dados.map((valor, chave) => (
              <StyledTableRow hover key={chave} onClick={ () => history.push('/dispositivo/' + valor['id']) }> 
                <StyledTableCell align="center">{valor['business_name']}</StyledTableCell>
                <StyledTableCell align="center">{valor['device']}</StyledTableCell>
                <StyledTableCell align="center">{valor['model']}</StyledTableCell>
                <StyledTableCell align="center">{valor['neighborhood']}</StyledTableCell>
                <StyledTableCell align="center">{valor['city']}</StyledTableCell>
                <StyledTableCell align="center">{valor['state']}</StyledTableCell>
                <StyledTableCell align="center">{valor['country']}</StyledTableCell>
                <StyledTableCell align="center"><Button variant="outlined"><SearchIcon color="primary" /></Button></StyledTableCell>
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