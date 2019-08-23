<template>
  <v-app>
    <v-navigation-drawer v-model="ui.drawer" app clipped>
      <v-list dense>
        <template v-for="item in ui.itemsMenu">
          <v-list-item v-bind:key="item.id" @click="navegarOpcionMenu(item)">
            <v-list-item-action>
              <v-icon>{{item.icono}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.etiqueta}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="primary darken-3" dark>
      <v-app-bar-nav-icon @click.stop="ui.drawer = !ui.drawer"></v-app-bar-nav-icon>
      <v-btn text large>
        <v-avatar height="32px" width="45px" tile>
          <v-img src="../assets/logo-conna-transparente.png" alt="Logo conna"></v-img>
        </v-avatar>
      </v-btn>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text depressed v-on="on">
            <v-icon>account_circle</v-icon>
            {{ui.nickName}}
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>person</v-icon>
            </v-list-item-action>
            <v-list-item-title>Cuenta</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-icon>person</v-icon>
            </v-list-item-action>
            <v-list-item-title>Cambiar contraseña</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-icon>power_settings_new</v-icon>
            </v-list-item-action>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <formulario-articulo></formulario-articulo>
    </v-content>

    <dialog-cargando></dialog-cargando>
  </v-app>
</template>
<script>
// @ is an alias to /src
import DialogCargando from "@/components/Generales/DialogCargando.vue";
import CasosVistaUsuario from "@/components/CasosVistaUsuario.vue";
import FormularioCaso from "@/components/FormularioCaso.vue"
import EstadoCaso from '@/components/EstadoCaso.vue'
import ExpedienteEquipo from '@/components/ExpedienteEquipo.vue'
import ArticulosSoluciones from '@/components/ArticulosSoluciones.vue'
import FormularioArticulo from '@/components/FormularioArticulo.vue'

export default {
  name: "home",
  components: {
    DialogCargando,
    CasosVistaUsuario,
    FormularioCaso,
    EstadoCaso,
    ExpedienteEquipo,
    ArticulosSoluciones,
    FormularioArticulo
  },
  data() {
    return {
      ui: {
        nickName: "Usuario",
        drawer: null,
        itemsMenu: [
          {
            id: 0,
            icono: "dashboard",
            etiqueta: "Opciones",
            ruta: "Prueba0"
          },
          {
            id: 1,
            icono: "settings",
            etiqueta: "Configs",
            ruta: "Prueba1"
          },
          {
            id: 2,
            icono: "dashboard",
            etiqueta: "Opciones",
            ruta: "Prueba2"
          },
          {
            id: 3,
            icono: "settings",
            etiqueta: "Configs",
            ruta: "Prueba3"
          }
        ]
      }
    };
  },
  mounted() {
    Notification.requestPermission().then(() => new Notification('Hola mundo!'))
    this.armarNickName();
  },
  methods: {
    armarNickName: function() {
      let nickName = "";
      let user = this.$store.state.userInfo;
      let nombres = [
        user.primerNombre,
        user.segundoNombre,
        user.tercerNombre,
        user.primerApellido,
        user.segundoApellido,
        user.tercerApellido
      ];

      for (var i = 0; i < nombres.length; i++) {
        if (i < 2) {
          if (nombres[i].length > 0) {
            nickName = nombres[i];
            i = 2;
          }
        } else {
          if (nombres[i].length > 0) {
            nickName = nickName + " " + nombres[i];
            i = 5;
          }
        }
      }

      this.ui.nickName = nickName;
    },
    cargarVistaPrincipal: function(rutaDestino) {
      //this.$router.push({ name: "Home"});
      this.$router.push({ name: rutaDestino });
    },
    navegarOpcionMenu: function(opcionMenu) {
      alert("Navegar a: " + this.ui.itemsMenu[opcionMenu.id].ruta);
      //this.$router.push({ name: "ConsultaMarcaciones" });
    }
  }
};
</script>
