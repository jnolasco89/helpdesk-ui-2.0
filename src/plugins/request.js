import Axios from 'axios'

export default Axios.create({
    //baseURL: 'http://192.168.8.175:8080/helpdeskconna/ws',
    baseURL:'http://app.conna.gob.sv/sinaes-rest/api/ws',
    timeout: 1000
})