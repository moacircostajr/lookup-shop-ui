import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Grid, Card, CardContent, Typography, Box, FormControlLabel, Checkbox } from '@material-ui/core'
import api from '../services/api'



const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '2em 0',
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
    },
    video: {
      width: '320',
      height: '240',
    }
  }),
);


export default function FormularioDispositivo() {


  const [id, setId] = useState(undefined)
  const [id_company, setIdCompany] = useState(undefined)
  const [business_name, setBusinessName] = useState('')
  const [device, setDevice] = useState('')
  const [model, setModel] = useState('')
  const [access_address, setAccessAddress] = useState('')
  const [address, setAddress] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [time_zone, setTimezone] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [is_active, setIsActive] = useState(true)

  const [acao_botao_conexao, setAcaoBotaoConexao] = useState('')

  const history = useHistory()
  const classes = useStyles()
  const token = localStorage.getItem('tokenaiChug4e')
  const { uuid } = useParams()

  useEffect(() => {
    if (uuid) {
      try {
        api.get('devices/' + uuid, {headers: {Authorization: token,}}).then(response => {
          setId(response.data.id)
          setIdCompany(response.data.id_company)
          setBusinessName(response.data.business_name)
          setDevice(response.data.device)
          setModel(response.data.model)
          setAccessAddress(response.data.access_address)
          setAddress(response.data.address)
          setComplement(response.data.complement)
          setNeighborhood(response.data.neighborhood)
          setCity(response.data.city)
          setState(response.data.state)
          setCountry(response.data.country)
          setTimezone(response.data.time_zone)
          setLatitude(response.data.latitude)
          setLongitude(response.data.longitude)
          setIsActive(response.data.is_active)
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

  useEffect(() => {
    is_active ? setAcaoBotaoConexao('Desativar') : setAcaoBotaoConexao('Ativar')
  }, [is_active])

  function alternarEstadoCamera() {
    if (!is_active) {
      try {
        api.post('/devices/' + id + '/shed_record/', {"access_address" : access_address}, {headers: {Authorization: token,}}).then(response => {
          if (response.data.device) {
            // setIsActive(true)
            // api.patch(/devices/ + id + '/', {"is_active": "true"}, {headers: {Authorization: token,}})
            alert('O dispositivo de endereço ' + response.data.device + ' irá iniciar o ciclo de gravação às 0h de amanhã.')
            // setAcaoBotaoConexao('Desativar')
          }
        })
      } catch (erro) {
        alert('Falha na conexão.')
      }
    } else {
      console.log('Desativar camera...')
      // setAcaoBotaoConexao('Conectar')
    }
  }

  async function registrarDispositivo(e) {
    e.preventDefault()
    const data = {
      id,
      id_company,
      business_name,
      device,
      model,
      access_address,
      address,
      complement,
      neighborhood,
      city,
      state,
      country,
      time_zone,
      latitude,
      longitude,
    }
    try {
      id === undefined ? await api.post('devices/', data, {headers: {Authorization: token}}) : await api.put('devices/' + uuid + '/', data, {headers: {Authorization: token}})
      history.push('/dispositivos')
    } catch(err) {
      alert('Falha ao registrar esta empresa. Por favor, tente novamente.')
    }
  }

  return (
  <div>
    <div className={classes.modal}>
      <Grid item xs={11} sm={11} md={11} lg={7} xl={7}>
        <Card>
          <CardContent>
            <Typography variant="h4">Dispositivo</Typography>
            <Typography>Formulário de registro</Typography>
            <div style={{height:10}}></div>
            <form onSubmit={registrarDispositivo}>
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
                    label="Dispositivo"
                    onChange = {e => setDevice(e.target.value)}
                    value={device}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Modelo"
                    onChange = {e => setModel(e.target.value)}
                    value={model}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                  <TextField
                    className={classes.campos}
                    label="Endereço de acesso"
                    onChange = {e => setAccessAddress(e.target.value)}
                    value={access_address}
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
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled
                      checked={is_active}
                      color="primary"
                    />
                  }
                  label="Ativa"
                />
              </Grid>
              <Box display="flex" justifyContent="flex-end">
                <Button color="primary" variant="contained" className={classes.botao} type="submit">Registrar</Button>
              </Box>
            </form>
            <Box display="flex" justifyContent="flex-end">
              <Button disabled={is_active} color="primary" variant="contained" className={classes.botao} onClick={() => alternarEstadoCamera()}>{acao_botao_conexao}</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </div>
  </div>
  )
}