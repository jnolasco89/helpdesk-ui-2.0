<template>
  <v-container fluid>
    <v-card flat class="elevation-5">
      <v-card-title>{{ui.tituloFormulario}}</v-card-title>
      <v-card-text>
        <v-container fluid fill-height>
          <v-layout align-center justify-center row fill-height>
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-subheader>Configuración servidor SMTP</v-subheader>
              <v-divider></v-divider>
            </v-flex>
            <v-flex xs12 sm11 md8 lg6 xl6>
              <br/>
              Parametros de configuración para el servidor SMTP
              <v-form>
                <v-text-field label="Servidor SMTP" v-model="config.smtp.direccion" />
                <v-text-field label="Puerto" v-model="config.smtp.puerto" />
                <v-text-field label="Usuario" v-model="config.smtp.usuario" />
                <v-text-field
                  label="Contraseña"
                  prepend-icon="lock"
                  placeholder=" "
                  :append-icon="ui.passSmtpVisible ? 'visibility_off' : 'visibility'"
                  :type="ui.passSmtpVisible ? 'text' : 'password'"
                  @click:append="ui.passSmtpVisible = !ui.passSmtpVisible"
                  v-model="config.smtp.password"
                ></v-text-field>
              </v-form>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-subheader>Plantilla correo caso recibido</v-subheader>
              <v-divider></v-divider>
            </v-flex>
            <v-flex xs12 sm11 md8 lg6 xl6>
              <br/>
              <p class="infoConfig">Cuando un usuario realice una solicitud recibira un correo con la Plantilla mostrada a continuación:</p>
              <vue-editor v-model="config.emailCasoRecibido"></vue-editor>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-subheader>Plantilla correo caso asignado y ticket generado</v-subheader>
              <v-divider></v-divider>
            </v-flex>
            <v-flex xs12 sm11 md8 lg6 xl6>
              <br/>
              <p class="infoConfig">Cuando la solicitud del usuario sea vista y asignada a un miembro del equipo de asistencia, se procederá
              a enviár un correo con la plantilla mostrada a continuación:</p>
              <vue-editor v-model="config.emailCasoRecibido"></vue-editor>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-subheader>Plantilla correo caso finalizado</v-subheader>
              <v-divider></v-divider>
            </v-flex>
            <v-flex xs12 sm11 md8 lg6 xl6>
              <br/>
              <p class="infoConfig">Cuando el caso haya sido dado por finalizado se procedera a enviar un correo con la siguiente plantilla:</p>
              <vue-editor v-model="config.emailCasoRecibido"></vue-editor>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-divider class="mt-12"></v-divider>
      <v-card-actions>
        <v-layout justify-center>
          <v-btn color="primary" small>
            <v-icon right dark>arrow_forward</v-icon>Guardar
          </v-btn>
          <v-btn color="error" small>
            <v-icon right dark>arrow_forward</v-icon>Cancelar
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "formularioEmailConfig",
  components: {
    VueEditor
  },
  data() {
    return {
      ui: {
        tituloFormulario: "Configuracion email",
        passSmtpVisible: false
      },
      config: {
        smtp: {
          direccion: "",
          puerto: "",
          usuario: "",
          password: ""
        },
        emailCasoRecibido: ""
      }
    };
  }
};
</script>
<style>
.infoConfig{
  text-align: justify!important;
}
</style>