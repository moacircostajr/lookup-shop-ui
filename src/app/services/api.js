import axios from 'axios'

axios.defaults.withCredentials = true

// const api = axios.create({baseURL: 'http://solucoesvertice2019.ddns.net:8080'})
const api = axios.create({baseURL: 'http://localhost:8080'})

export default api