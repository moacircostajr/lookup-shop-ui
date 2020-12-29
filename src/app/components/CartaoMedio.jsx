import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
  cartao: {
    margin: '10px 0',
    maxWidth: '500px',
    minWidth: '250px',
    height: '320px',
  },
})


export default function CartaoMedio(props) {

  const classes = useStyles()

  return (
    <Card className={classes.cartao}>
      {props.children}
    </Card>
  )
}
