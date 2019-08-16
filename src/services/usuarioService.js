import Axios from '../plugins/request'

export default class UsuarioService {

    /*
    loginUser(nit,password) {
       return   Axios
            .post("/usuario/login", {
                nit: nit,
                contrasenia: password
            })
            .then(response => {
                return response;
            })
            .catch(function (error) {
                return {
                    estado:0,
                    msjErrorCustom:"El tiempo de espera para la petición llego a su limite, el servidor no responde.",
                    msjErrorDefault:error.message
                };
            });
    }*/
    async prueba(){
        try {
            const response = await Axios.get("CatTemas");
            return response;
        }
        catch (error) { 
            console.log(error);
            return {
                estado: 0,
                msjErrorCustom: "Ocurrio un error al realizar la petición.",
                msjErrorDefault: error.message
            };
        }
    }

    async loginUser(nit,password) {
        try {
             const response = await Axios
                 .post("/usuario/login", {
                     nit: nit,
                     contrasenia: password
                 });
             return response;
         }
         catch (error) {
             console.log(error);
             return {
                 estado: 0,
                 msjErrorCustom: "El tiempo de espera para la petición llego a su limite, el servidor no responde.",
                 msjErrorDefault: error.message,
                 userInfo:{
                    primerNombre:"Jose",
                    segundoNombre:"Edgardo",
                    tercerNombre:"",
                    primerApellido:"Nolasco",
                    segundoApellido:"Rodriguez",
                    tercerApellido:"",
                    nickName:"Jose Nolasco",
                    token:""
                 }
             };
         }
     }
}