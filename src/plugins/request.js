import Axios from 'axios'

export default Axios.create({
    baseURL: 'http://192.168.8.175:8080/helpdeskconna/ws',
    timeout: 1000
})