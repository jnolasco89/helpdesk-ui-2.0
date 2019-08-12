<template>
  <div class="home">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-list-item v-bind:key="item">
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify"></v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn :href="source" icon large target="_blank" v-on="on">
                <v-icon large>mdi-code-tags</v-icon>
              </v-btn>
            </template>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                large
                href="https://codepen.io/johnjleider/pen/MNYLdL"
                target="_blank"
                v-on="on"
              >
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
            </template>
            <span>Codepen</span>
          </v-tooltip>
        </v-layout>
      </v-container>
    </v-content>

    <!-- ************************************************************* -->

    <!-- ===========================================
                    MENU LATERAL
    ===============================================-->
    <v-navigation-drawer fixed app clipped>
      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="navegarOpcionMenu(1)">Marcaciones</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>contact_mail</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="navegarOpcionMenu(2)">Reservaciones</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ===========================================
                    NAVBAR SUPERIOR
    ===============================================-->
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <a class="d-flex router-link-active">
        <img src="../assets/logo-conna-transparente.png" width="60px" height="38px" />
      </a>
      <v-toolbar-title class="white--text">
        Mesa de ayuda - Consejo Nacional de la Niñez y de la Adolescencia -
        CONNA
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <v-icon>account_circle</v-icon>
          {{ui.nickName}}
        </v-btn>
        <v-btn text>
          <v-icon>power_settings_new</v-icon>Salir
        </v-btn>
      </v-toolbar-items>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- ===========================================
                    CONTENIDO PRINCIPAL
                     v-on:mostrarCargando="mostrarCargando"
    ===============================================-->
    <v-content>
      <v-container fluid fill-height>
        <router-view v-on:loginCorrecto="cargarVistaPrincipal"></router-view>
      </v-container>
    </v-content>

    <dialog-cargando></dialog-cargando>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DialogCargando from "@/components/DialogCargando.vue";

export default {
  name: "home",
  data() {
    return {
      ui: {
        nickName: "Usuario"
      }
    };
  },
  components: {
    HelloWorld,
    DialogCargando
  },
  mounted() {
    this.$store.commit("mostrarModalCargando", true);
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
    navegarOpcionMenu: function(opcion) {
      switch (opcion) {
        case 1:
          alert("ir a marcas");
          this.$router.push({ name: "ConsultaMarcaciones" });
          break;
        case 2:
          alert("ir a admin");
          this.$router.push({ name: "AdminEmpleados" });
          break;
      }
    }
  }
};
</script>