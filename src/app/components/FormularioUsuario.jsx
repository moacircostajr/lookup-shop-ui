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


export default function FormularioUsuario() {
  const [id, setId] = useState(undefined)
  const [id_company, setIdCompany] = useState(undefined)
  const [business_name, setBusinessName] = useState('')
  const [cpf, setCpf] = useState('')
  const [zip_code, setZipCode] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [phones, setPhones] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')
  const [is_active, setIsActive] = useState(true)

  const history = useHistory()
  const classes = useStyles()
  const token = localStorage.getItem('tokenaiChug4e')
  const { uuid } = useParams()

  useEffect(() => {
    if (uuid) {
      try {
        api.get('users/' + uuid, {headers: {Authorization: token,}}).then(response => {
          setId(response.data.id)
          setIdCompany(response.data.id_company)
          setBusinessName(response.data.business_name)
          setCpf(response.data.cpf)
          setZipCode(response.data.zip_code)
          setEmail(response.data.email)
          setAddress(response.data.address)
          setComplement(response.data.complement)
          setNeighborhood(response.data.neighborhood)
          setCity(response.data.city)
          setState(response.data.state)
          setCountry(response.data.country)
          setPhones(response.data.phones)
          setFirstName(response.data.first_name)
          setLastName(response.data.last_name)
          setPassword(response.data.password)
          setUsername(response.data.username)
          setIsActive(response.data.is_active)
        })
      } catch(err) {
        alert('Erro ao buscar usuário. Por favor, tente novamente.')
        history.push('/usuarios')
      }
    } else {
      const usuario = JSON.parse(localStorage.getItem('userta!Kahb3'))
      setIdCompany(usuario.id_company)
      setBusinessName(usuario.business_name)
      setCity(usuario.city)
      setState(usuario.state)
      setCountry(usuario.country)
    }
  }, [uuid, history, token])

  

  async function registrarUsuario(e) {
    e.preventDefault()
    const data = {
      id,
      id_company,
      business_name,
      cpf,
      zip_code,
      email,
      address,
      complement,
      neighborhood,
      city,
      state,
      country,
      phones,
      first_name,
      last_name,
      password,
      username,
      is_active,
    }
    try {
      if (confirm_password === password) {
        if (id === undefined) {
          await api.post('users/', data, {headers: {Authorization: token}})
        } else {
          await api.put('users/' + uuid + '/', data, {headers: {Authorization: token}})
        }
        history.push('/usuarios')
      } else {
        alert('Por favor, informe uma senha e a confirme corretamente')
      }
    } catch(err) {
      alert('Falha ao registrar este usuário. Por favor, tente novamente.')
    }
  }

  return (
    <div>
      <div className={classes.modal}>
        <Grid item xs={11} sm={11} md={11} lg={7} xl={7}>
          <Card>
            <CardContent>
              <Typography variant="h4">Usuário</Typography>
              <Typography>Formulário de registro</Typography>
              <div style={{height:10}}></div>
              <form onSubmit={registrarUsuario}>
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
                      label="CPF"
                      onChange = {e => setCpf(e.target.value)}
                      value={cpf}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <TextField
                      className={classes.campos}
                      label="CEP"
                      onChange = {e => setZipCode(e.target.value)}
                      value={zip_code}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                    <TextField
                      className={classes.campos}
                      label="Email"
                      onChange = {e => setEmail(e.target.value)}
                      value={email}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <TextField
                      className={classes.campos}
                      label="Nome"
                      onChange = {e => setFirstName(e.target.value)}
                      value={first_name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <TextField
                      className={classes.campos}
                      label="Sobrenome"
                      onChange = {e => setLastName(e.target.value)}
                      value={last_name}
                    />
                  </Grid>
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
                      label="Telefone(s)"
                      onChange = {e => setPhones(e.target.value)}
                      value={phones}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <TextField
                      className={classes.campos}
                      label="Username"
                      onChange = {e => setUsername(e.target.value)}
                      value={username}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <TextField
                      type="password"
                      className={classes.campos}
                      label="Senha"
                      onChange = {e => setPassword(e.target.value)}
                      value={password}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <TextField
                      type="password"
                      className={classes.campos}
                      label="Confirmação da senha"
                      onChange = {e => setConfirmPassword(e.target.value)}
                      value={confirm_password}
                    />
                  </Grid>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={is_active}
                        onChange={e => setIsActive(!is_active)}
                        color="primary"
                      />
                    }
                    label="Ativo"
                  />
                </Grid>
                <Box display="flex" justifyContent="flex-end">
                  <Button color="primary" variant="contained" className={classes.botao} type="submit">Registrar</Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </div>
  )
}