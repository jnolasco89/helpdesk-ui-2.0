<template>
  <v-app>
    <!-- ===========================================
                    CONTENIDO PRINCIPAL
    ===============================================-->
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs10 sm6 md4 lg3 xl3>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Ingreso</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="NIT"
                    prepend-icon="person"
                    placeholder="0000-000000-000-0"
                    v-mask="ui.mascaraNit"
                    return-masked-value
                    v-model="data.nit"
                    data-vv-name="data.nit"
                    v-validate="'required|length:17'"
                    :error-messages="errorsVee.collect('data.nit')"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Contraseña"
                    prepend-icon="lock"
                    placeholder=" "
                    :append-icon="ui.passVisible ? 'visibility_off' : 'visibility'"
                    :type="ui.passVisible ? 'text' : 'password'"
                    @click:append="ui.passVisible = !ui.passVisible"
                    v-model="data.password"
                    data-vv-name="data.password"
                    v-validate="'required'"
                    :error-messages="errorsVee.collect('data.password')"
                    required
                  ></v-text-field>
                  <a @click="irAresetPass">Restablecer contraseña</a>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-layout justify-center>
                  <v-btn @click="login" color="primary" small>
                    Ingresar
                    <v-icon right dark>arrow_forward</v-icon>
                  </v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
            <v-alert
              v-show="ui.verMsjErrorEnlogin"
              :value="true"
              color="error"
              icon="warning"
            >{{ui.msjError}}</v-alert>
            <v-expansion-panel v-show="ui.verDetallesError">
              <v-expansion-panel-content expand-icon="keyboard_arrow_down">
                <template v-slot:header>
                  <div>Detalle error</div>
                </template>
                <v-card>
                  <v-card-text class="grey lighten-3">{{ui.msjDetallesError}}</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <!-- ===========================================
                    PIE DE PAGINA
    ===============================================-->
    <v-footer app>
      <v-layout justify-center row wrap>
        <v-flex lighten-2 text-xs-center xs12>
          <div>
            <h3>
              <strong>
                ¿No tiene cuenta?
                <a @click="irARegistrarse">Registrarse</a>
              </strong>
            </h3>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>

    <dialog-cargando></dialog-cargando>
  </v-app>
</template>

<script>
import DialogCargando from "../components/DialogCargando";
import UsuarioService from "../services/usuarioService";

const usuarioServ = new UsuarioService();

export default {
  name: "login",
  components: {
    DialogCargando
  },
  data() {
    return {
      ui: {
        passVisible: false,
        mascaraNit: "####-######-###-#",
        verMsjErrorEnlogin: false,
        msjError: "",
        msjDetallesError: "",
        verDetallesError: false
      },
      data: {
        nit: "",
        password: ""
      },
      dictionary: {
        attributtes: {
          "data.nit": "NIT",
          "data.password": "Contraseña"
        },
        custom: {
          "data.nit": {
            required: function() {
              return "El campo NIT es requerido";
            },
            length: function() {
              return "El campo NIT debe tener 14 digitos";
            }
          },
          "data.password": {
            required: function() {
              return "El campo contraseña es requerido";
            }
          }
        }
      }
    };
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  methods: {
    irAresetPass: function() {
      this.$router.push({ name: "ResetearPassword" });
    },
    irARegistrarse: function() {},
    login: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.commit("mostrarModalCargando", true);

          usuarioServ.loginUser().then(respuesta => {
            this.$store.commit("mostrarModalCargando", false);
            if (respuesta.estado == 0) {
              this.ui.verMsjErrorEnlogin = true;
              this.ui.msjError = respuesta.msjErrorCustom;
              this.ui.msjDetallesError = respuesta.msjErrorDefault;
              this.ui.verDetallesError=true;
            }
          });

          return;
        }
      });
    }
  }
};
</script>
<style>
.v-footer {
  text-align: center !important;
}
</style>