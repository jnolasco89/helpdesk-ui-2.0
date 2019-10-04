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
      <v-btn icon @click="cerrarSesion">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <dialog-cargando></dialog-cargando>
  </v-app>
</template>
<script>
// @ is an alias to /src
import DialogCargando from "@/components/Generales/DialogCargando.vue";
import UsuarioService from "../services/usuarioService";

const usuarioServ = new UsuarioService();

export default {
  name: "home",
  components: {
    DialogCargando
  },
  data() {
    return {
      model:{
        user:null
      },
      ui: {
        nickName: "Usuario",
        drawer: null,
        itemsMenu: []
      }
    };
  },
  mounted() {
    //Notification.requestPermission().then(() => new Notification('Hola mundo!'))
    var userInfo=JSON.parse(localStorage.getItem("data-user"));
    this.model.user=userInfo;

    this.ui.itemsMenu=[];
    userInfo.usuario.menus.forEach(m => {
      this.ui.itemsMenu.push({
            id: m.id,
            icono: m.icono,
            etiqueta: m.nombre,
            ruta: m.ruta
      });
    });

    this.armarNickName();
    this.$router.push({name:this.ui.itemsMenu[0].ruta});
  },
  methods: {
    armarNickName: function() {
      let nickName = "";
      let nombres = [
        this.model.user.primerNombre,
        this.model.user.segundoNombre,
        this.model.user.tercerNombre,
        this.model.user.primerApellido,
        this.model.user.segundoApellido,
        this.model.user.tercerApellido
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
      //alert("Navegar a: " + this.ui.itemsMenu[opcionMenu.id].ruta);
      this.$router.push({ name: opcionMenu.ruta });
    },
    cerrarSesion:function(){
      var response=usuarioServ.cerrarSesion(this.model.user.id);
      this.$router.push({name:'Login'});
      console.log(JSON.stringify(response));
    }
  }
};
</script>
