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


export default function FormularioEmpresa() {


  const [id, setId] = useState(undefined)
  const [cnpj, setCnpj] = useState('')
  const [company_name, setCompanyName] = useState('')
  const [business_name, setBusinessName] = useState('')
  const [address, setAddress] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [zip_code, setZipCode] = useState('')
  const [phones, setPhones] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [first_name_owner, setFirstNameOwner] = useState('')
  const [last_name_owner, setLastNameOwner] = useState('')
  const [cpf_owner, setCpfOwner] = useState('')
  const [email_owner, setEmailOwner] = useState('')
  const [id_owner, setIdOwner] = useState(null)
  const [password_owner, setPasswordOwner] = useState('')
  const [confirm_password_owner, setConfirmPasswordOwner] = useState('')
  const [is_active, setIsActive] = useState(true)

  const history = useHistory()
  const classes = useStyles()
  const token = localStorage.getItem('tokenaiChug4e')
  const { uuid } = useParams()

  useEffect(() => {
    if (uuid) {
      try {
        api.get('companies/' + uuid, {headers: {Authorization: token,}}).then(response => {
          setId(response.data.id)
          setCnpj(response.data.cnpj)
          setCompanyName(response.data.company_name)
          setBusinessName(response.data.business_name)
          setAddress(response.data.address)
          setComplement(response.data.complement)
          setNeighborhood(response.data.neighborhood)
          setCity(response.data.city)
          setState(response.data.state)
          setCountry(response.data.country)
          setZipCode(response.data.zip_code)
          setPhones(response.data.phones)
          setEmail(response.data.email)
          setFirstNameOwner(response.data.first_name_owner)
          setLastNameOwner(response.data.last_name_owner)
          setCpfOwner(response.data.cpf_owner)
          setEmailOwner(response.data.email_owner)
          setIdOwner(response.data.id_owner)
          setIsActive(response.data.is_active)
          api.get('users/' + response.data.id_owner, {headers: {Authorization: token,}}).then(response => {
            setPasswordOwner(response.data.password)
            setUsername(response.data.username)
          })
        })
      } catch(err) {
        alert('Erro ao buscar empresa, tente novamente.')
        history.push('/principal')
      }
    }
  }, [uuid, history, token])

  

  async function registrarEmpresa(e) {
    e.preventDefault()
    const data = {
      id,
      cnpj,
      company_name,
      business_name,
      address,
      complement,
      neighborhood,
      city,
      state,
      country,
      zip_code,
      phones,
      email,
      first_name_owner,
      last_name_owner,
      cpf_owner,
      email_owner,
      id_owner,
      is_active,
    }
    try {
      if (confirm_password_owner === password_owner) {
        if (id === undefined) {
          await api.post('companies/', data, {headers: {Authorization: token}}).then(async (response) => {
            const dataUser = {
              "id": null,
              "id_company": response.data.id,
              "business_name": response.data.business_name,
              "cpf": response.data.cpf_owner,
              "zip_code": response.data.zip_code,
              "email": response.data.email_owner,
              "address": response.data.address,
              "complement": response.data.complement,
              "neighborhood": response.data.neighborhood,
              "city": response.data.city,
              "state": response.data.state,
              "country": response.data.country,
              "phones": response.data.phones,
              "username": username,
              "first_name": response.data.first_name_owner,
              "last_name": response.data.last_name_owner,
              "is_active": response.data.is_active,
              "password": password_owner,
            }
            await api.post('users/', dataUser, {headers: {Authorization: token}}).then(async (response) => {
              await api.patch('companies/' + response.data.id_company + '/', {"id_owner": response.data.id}, {headers: {Authorization: token}})
            })
          })
        } else {
          await api.put('companies/' + uuid + '/', data, {headers: {Authorization: token}}).then(async (response) => {
            const dataUser = {
              "id": response.data.id_owner,
              "id_company": response.data.id,
              "business_name": response.data.business_name,
              "cpf": response.data.cpf_owner,
              "zip_code": response.data.zip_code,
              "email": response.data.email_owner,
              "address": response.data.address,
              "complement": response.data.complement,
              "neighborhood": response.data.neighborhood,
              "city": response.data.city,
              "state": response.data.state,
              "country": response.data.country,
              "phones": response.data.phones,
              "username": username,
              "first_name": response.data.first_name_owner,
              "last_name": response.data.last_name_owner,
              "is_active": response.data.is_active,
              "password": password_owner,
            }
            await api.put('users/' + id_owner + '/', dataUser, {headers: {Authorization: token}})
          })
        }
        history.push('/empresas')
      } else {
        alert('Por favor, informe uma senha e a confirme corretamente')
      }
    } catch(err) {
      alert('Falha ao registrar esta empresa. Por favor, tente novamente.')
    }
  }

  return (
    <div className={classes.modal}>
      <Grid item xs={11} sm={11} md={11} lg={7} xl={7}>
        <Card>
          <CardContent>
            <Typography variant="h4">Empresa</Typography>
            <Typography>Formulário de registro</Typography>
            <div style={{height:10}}></div>
            <form onSubmit={registrarEmpresa}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <TextField
                    className={classes.campos}
                    label="Nome de Fantasia"
                    onChange = {e => setBusinessName(e.target.value)}
                    value={business_name}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <TextField
                    className={classes.campos}
                    label="CNPJ"
                    onChange = {e => setCnpj(e.target.value)}
                    value={cnpj}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <TextField
                    className={classes.campos}
                    label="Razão Social"
                    onChange = {e => setCompanyName(e.target.value)}
                    value={company_name}
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
              <Grid container>
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
                    className={classes.campos}
                    label="Nome do presidente"
                    onChange = {e => setFirstNameOwner(e.target.value)}
                    value={first_name_owner}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Sobrenome do presidente"
                    onChange = {e => setLastNameOwner(e.target.value)}
                    value={last_name_owner}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="Email do Presidente"
                    onChange = {e => setEmailOwner(e.target.value)}
                    value={email_owner}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    className={classes.campos}
                    label="CPF do Presidente"
                    onChange = {e => setCpfOwner(e.target.value)}
                    value={cpf_owner}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    type="password"
                    className={classes.campos}
                    label="Senha"
                    onChange = {e => setPasswordOwner(e.target.value)}
                    value={password_owner}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    type="password"
                    className={classes.campos}
                    label="Confirmação da senha"
                    onChange = {e => setConfirmPasswordOwner(e.target.value)}
                    value={confirm_password_owner}
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
                  label="Ativa"
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
  )
}