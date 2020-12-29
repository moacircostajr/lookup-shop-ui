import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Grid, Card, CardContent, Typography, Box } from '@material-ui/core'
import api from '../services/api'


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
    alinhamentoCabecalho: {
      textAlign: 'right',
    },
    botaoNovaEmpresa: {
      margin: '16px',
    },
    container: {
      height: '83vh',
    },
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: 300,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    },
    botao: {
      marginTop: '1em',
      texTransform: 'none',
      texDecoration: 'none',
    },
    campos: {
      width: '98%',
    }
  }),
);


export default function FormularioCliente() {


  const [id, setId] = useState(undefined)
  const [id_company, setIdCompany] = useState(undefined)
  const [business_name, setBusinessName] = useState('')
  const [name, setName] = useState('')
  const [zip_code, setZipCode] = useState('')
  const [address, setAddress] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [time_zone, setTimezone] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [phones, setPhones] = useState('')
  const [email, setEmail] = useState('')

  const history = useHistory()
  const classes = useStyles()
  const token = localStorage.getItem('tokenaiChug4e')
  const { uuid } = useParams()

  useEffect(() => {
    if (uuid) {
      try {
        api.get('customers/' + uuid, {headers: {Authorization: token,}}).then(response => {
          setId(response.data.id)
          setIdCompany(response.data.id_company)
          setBusinessName(response.data.business_name)
          setName(response.data.name)
          setZipCode(response.data.zip_code)
          setAddress(response.data.address)
          setComplement(response.data.complement)
          setNeighborhood(response.data.neighborhood)
          setCity(response.data.city)
          setState(response.data.state)
          setCountry(response.data.country)
          setTimezone(response.data.time_zone)
          setLatitude(response.data.latitude)
          setLongitude(response.data.longitude)
          setPhones(response.data.phones)
          setEmail(response.data.email)
        })
      } catch(err) {
        alert('Erro ao buscar empresa, tente novamente.')
        history.push('/principal')
      }
    } else {
      const usuario = JSON.parse(localStorage.getItem('userta!Kahb3'))
      setIdCompany(usuario.id_company)
      setBusinessName(usuario.business_name)
      setCity(usuario.city)
      setState(usuario.state)
      setCountry(usuario.country)
      setTimezone(usuario.time_zone)
    }
  }, [uuid, history, token])

  

  async function registrarCliente(e) {
    e.preventDefault()
    const data = {
      id,
      id_company,
      business_name,
      name,
      zip_code,
      address,
      complement,
      neighborhood,
      city,
      state,
      country,
      time_zone,
      latitude,
      longitude,
      phones,
      email,
    }
    try {
      id === undefined ? await api.post('customers/', data, {headers: {Authorization: token}}) : await api.put('customers/' + uuid + '/', data, {headers: {Authorization: token}})
      history.push('/clientes')
    } catch(err) {
      alert('Falha ao registrar esta empresa. Por favor, tente novamente.')
    }
  }

  return (
    <div className={classes.modal}>
      <Grid item xs={11} sm={11} md={11} lg={7} xl={7}>
        <Card>
          <CardContent>
            <Typography variant="h4">Cliente</Typography>
            <Typography>Formulário de registro</Typography>
            <div style={{height:10}}></div>
            <form onSubmit={registrarCliente}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <TextField
                    disabled
                    className={classes.campos}
                    label="Empresa"
                    value={business_name}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <TextField
                    className={classes.campos}
                    label="Nome"
                    onChange = {e => setName(e.target.value)}
                    value={name}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <TextField
                    className={classes.campos}
                    label="CEP"
                    onChange = {e => setZipCode(e.target.value)}
                    value={zip_code}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Endereço"
                    onChange = {e => setAddress(e.target.value)}
                    value={address}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Complemento"
                    onChange = {e => setComplement(e.target.value)}
                    value={complement}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Bairro"
                    onChange = {e => setNeighborhood(e.target.value)}
                    value={neighborhood}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Cidade"
                    onChange = {e => setCity(e.target.value)}
                    value={city}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Estado"
                    onChange = {e => setState(e.target.value)}
                    value={state}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="País"
                    onChange = {e => setCountry(e.target.value)}
                    value={country}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Fuso Horário"
                    value={time_zone}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Latitude"
                    onChange = {e => setLatitude(e.target.value)}
                    value={latitude}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Longitude"
                    onChange = {e => setLongitude(e.target.value)}
                    value={longitude}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Telefone(s)"
                    onChange = {e => setPhones(e.target.value)}
                    value={phones}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Email"
                    onChange = {e => setEmail(e.target.value)}
                    value={email}
                  />
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="flex-end">
                <Button color="primary" variant="contained" className={classes.botao} type="submit">Registrar</Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}