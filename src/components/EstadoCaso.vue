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
              <v-card class="mb-12 mx-auto" color="grey lighten-3">
                <v-card-text>
                  <v-container fluid fill-height>
                    <v-layout align-center justify-center row fill-height>
                      <v-flex xs12 sm10 md8 lg8 xl8>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Hora y fecha de recepción</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaRecibido.fechaRecibido}} - {{etapaRecibido.horaRecibido}}</v-subheader>
                          </v-col>
                        </v-row>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Prioridad</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaRecibido.prioridad}}</v-subheader>
                          </v-col>
                        </v-row>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Turnos restantes</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaRecibido.turnosRestantes}}</v-subheader>
                          </v-col>
                        </v-row>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Titulo</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaRecibido.titulo}}</v-subheader>
                          </v-col>
                        </v-row>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Descripcion</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaRecibido.descripcion}}</v-subheader>
                          </v-col>
                        </v-row>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Correo enviado</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaRecibido.correoEnviado}}</v-subheader>
                          </v-col>
                        </v-row>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12 mx-auto" color="grey lighten-3">
                <v-card-text>
                  <v-container fluid fill-height>
                    <v-layout align-center justify-center row fill-height>
                      <v-flex xs12 sm10 md8 lg8 xl8>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Número de Ticket</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaTicket.numeroTicket}}</v-subheader>
                          </v-col>
                        </v-row>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Información</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaTicket.msj}}</v-subheader>
                          </v-col>
                        </v-row>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12 mx-auto" color="grey lighten-3">
                <v-card-text>
                  <v-container fluid fill-height>
                    <v-layout align-center justify-center row fill-height>
                      <v-flex xs12 sm10 md8 lg8 xl8>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Información</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaEnProceso.msj}}</v-subheader>
                          </v-col>
                        </v-row>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card class="mb-12 mx-auto" color="grey lighten-3">
                <v-card-text>
                  <v-container fluid fill-height>
                    <v-layout align-center justify-center row fill-height>
                      <v-flex xs12 sm10 md8 lg8 xl8>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            Fecha y hora finalización
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaFinalizado.fecha}} - {{etapaFinalizado.hora}}</v-subheader>
                          </v-col>
                        </v-row>
                      </v-flex>
                      <v-flex xs12 sm10 md8 lg8 xl8>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Tiempo en solucionar</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaFinalizado.tiempoEnSolucionar}}</v-subheader>
                          </v-col>
                        </v-row>
                      </v-flex>
                      <v-flex xs12 sm10 md8 lg8 xl8>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Diagnostico</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaFinalizado.diagnostico}}</v-subheader>
                          </v-col>
                        </v-row>
                      </v-flex>
                      <v-flex xs12 sm10 md8 lg8 xl8>
                        <v-row dense class="fila-detalle-estado">
                          <v-col cols="4">
                            <v-subheader>Solución</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-subheader>{{etapaFinalizado.solucion}}</v-subheader>
                          </v-col>
                        </v-row>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "estadoCaso",
  data() {
    return {
      e1: 0,
      etapaRecibido: {
        fechaRecibido: "02/03/2015",
        horaRecibido: "03:45 p.m",
        prioridad: "Alta",
        turnosRestantes: 2,
        titulo: "Computadora no enciende",
        descripcion:
          "Esta es una prueba de una descripcion larga para el incident que se esta viendo",
        correoEnviado: "Si"
      },
      etapaTicket: {
        msj:
          "Su caso a sido recibido por el personal de informatico y asignado a USUARIO DE PRUEBA",
        numeroTicket: 1123213
      },
      etapaEnProceso: {
        msj: "Se está diagnosticando y trabajando para solucionar su problema"
      },
      etapaFinalizado: {
        fecha: "01/01/2012",
        hora: "03:15 pm",
        tiempoEnSolucionar: "3 horas",
        diagnostico: "Esto fue el problema que tenia la maquina",
        solucion: "Se llevo a cabo esta solucion"
      }
    };
  }
};
</script>
<style>
.fila-detalle-estado {
  padding: 0 !important;
}
.fila-detalle-estado .col {
  padding: 0 !important;
}
.v-subheader{
  color:black!important;
}
</style>