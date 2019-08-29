import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
function cargaLazyVistas(view){
    return ()=>import(`./views/${view}.vue`);
}
function cargaLazyComponente(componente){
    return ()=>import(`@/components/${componente}.vue`)
}
export default new Router({
    routes:[
        {
            path:'/',
            name:'Login',
            component: cargaLazyVistas('Login')
        },
        {
            path:'/home',
            name:'Home',
            component:cargaLazyVistas('Home'),
            children:[
                {
                    path:'casos',
                    name:'Casos',
                    component:cargaLazyComponente('CasosVistaUsuario')
                },
                {
                    path:'estado-caso',
                    name:'EstadoCaso',
                    component:cargaLazyComponente('EstadoCaso')
                },
                {
                    path:'expediente-equipo',
                    name:'ExpedienteEquipo',
                    component:cargaLazyComponente('ExpedienteEquipo')
                },
                {
                    path:'articulos',
                    name:'Articulos',
                    component:cargaLazyComponente('ArticulosSoluciones')
                },
                {
                    path:'crear-articulo',
                    name:'CrearArticulo',
                    component:cargaLazyComponente('FormularioArticulo')
                },
                {
                    path:'crear-caso',
                    name:'CrearCaso',
                    component:cargaLazyComponente('FormularioCaso')
                },
                {
                    path:'email-config',
                    name:'EmailConfig',
                    component:cargaLazyComponente('FormularioEmailConfig')
                },
                {
                    path:'roles',
                    name:'Roles',
                    component:cargaLazyComponente('Roles')
                }
            ]
        }
    ]
})