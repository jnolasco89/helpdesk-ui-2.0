import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        verModalCargando:false,
        userInfo:null,
        datosPrueba:{

        }
    },
    mutations:{
        mostrarModalCargando(state, payload){
            state.verModalCargando=payload
        },
        setUserInfo(state, payload){
            state.userInfo=payload
        }
    },
    actions:{

    }
})