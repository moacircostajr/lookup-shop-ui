import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
  espacamento: {
    margin: '10px',
  },
  cartao: {
    width: '250px',
    height: '120px',
    padding: 0,
    margin: 0,
  },
  etiqueta: {
  	display: 'block',
  	padding: '29.75px 28px',
  	width: '84px',
  	height: '84px',
  	position: 'relative',
  	marginBottom: '-60px',
  	left: '15px',
  	borderRadius: '3px',
  },
  titulo: {
    color: '#999',
    margin: 0,
    fontSize: '14px',
    marginTop: 0,
    paddingTop: '10px',
    marginBottom: 0,
  },
  informacao: {
  	color: '#3C4858',
    minHeight: 'auto',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 300,
    textDecoration: 'none',
  	lineHeight: '0.6em',
  	fontSize: '1.825em',
  },
  alinhamentoDireita: {
	textAlign: 'right',  
  },
})


export default function CartaoPequenoSassu(props) {

  const classes = useStyles()

  return (
  	<div className={classes.espacamento}>
        <div className={classes.etiqueta} style={props.cssPainel}>
        	{props.children}
        </div>
	    <Card className={classes.cartao}>
	        <CardContent>
	        <div className={classes.alinhamentoDireita}>
	          <p className={classes.titulo}>{props.titulo}</p>
	          <h3 className={classes.informacao}>{props.informacao}</h3>
	        </div>
	        </CardContent>
	    </Card>
    </div>
  )
}
