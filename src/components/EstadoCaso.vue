<template>
  <v-container fluid>
    <v-card flat class="elevation-5">
      <v-card-title>Estado caso</v-card-title>
      <v-card-text>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Recibido</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">Ticket generado</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 3" step="3">En proceso</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="4">Finalizado</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" color="grey lighten-1" height="200px">
                  
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
            </v-stepper-content>

             <v-stepper-content step="4">
              <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
    name:'estadoCaso',
    data(){
        return {
            e1:0,
            etapaRecibido:{
                completa:1
            }
        }
    }
};
</script>