import Axios from 'axios'

Axios.interceptors.request.use(function (config) {
    config.headers.Authorization = localStorage.getItem('t-a')
    return config
})

export default Axios.create({
    baseURL: 'http://localhost:8080/helpdeskconna-2.0-web/ws',
    //baseURL:'http://app.conna.gob.sv/sinaes-rest/api/ws',
    timeout: 1000
})