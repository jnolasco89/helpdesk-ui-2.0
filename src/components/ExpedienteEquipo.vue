<template>
  <v-container>
    <v-card id="lateral" flat class="elevation-5">
      <v-card-title>
        <v-icon>desktop_windows</v-icon>&nbsp;Expediente de equipo
      </v-card-title>
      <v-card-text>
        <v-tabs background-color="primary accent-4" class="elevation-2" dark>
          <v-tab href="#tab-datos">
            <v-icon>description</v-icon>Detalles
          </v-tab>
          <v-tab-item value="tab-datos">
            <v-container fluid>
              <v-row no-gutters justify="start">
                <v-col cols="2">
                  <v-subheader>Categoria</v-subheader>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="detallesEquipo.categoria" readonly></v-text-field>
                </v-col>
              </v-row>

              <v-row no-gutters justify="start">
                <v-col cols="2">
                  <v-subheader>Tipo</v-subheader>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="detallesEquipo.tipo" readonly></v-text-field>
                </v-col>
              </v-row>

              <v-row no-gutters justify="start">
                <v-col cols="2">
                  <v-subheader>Características</v-subheader>
                </v-col>
                <v-col cols="6">
                  <v-textarea v-model="detallesEquipo.caracteristicas" readonly></v-textarea>
                </v-col>
              </v-row>

              <v-row no-gutters justify="start">
                <v-col cols="2">
                  <v-subheader>Usuario actual</v-subheader>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="detallesEquipo.usuarioActual" readonly></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>

          <v-tab href="#tab-historial-incidencias">
            <v-icon>assignment</v-icon>Historial incidencias
          </v-tab>
          <v-tab-item value="tab-historial-incidencias">
              <tabla-de-paginacion></tabla-de-paginacion>
          </v-tab-item>

          <v-tab href="#tab-historial-usuarios">
            <v-icon>assignment_ind</v-icon>Historial usuarios
          </v-tab>
          <v-tab-item value="tab-historial-usuarios">
              <tabla-de-paginacion></tabla-de-paginacion>
          </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import TablaDePaginacion from './Generales/TablaDePaginacion'

export default {
  name: "expedienteEquipo",
  components:{
      TablaDePaginacion
  },
  data(){
      return {
          detallesEquipo:{
              categoria:"Categoria",
              tipo:"Tipo",
              caracteristicas:"CPU 1.5 GHZ, 2GB RAM, 1TB HD",
              usuarioActual:"Usuario actual"
          }
      }
  }
};
</script>