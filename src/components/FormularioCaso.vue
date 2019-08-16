<template>
  <v-container fluid>
    <v-card flat class="elevation-5">
      <v-card-title>Reporte de caso</v-card-title>
      <v-card-text>
        <v-container fluid fill-height>
          <v-layout align-center justify-center row fill-height>
            <v-flex xs12 sm11 md8 lg6 xl6>
              <v-form>
                <v-select
                  :items="ui.tiposDeCaso"
                  label="Tipo de caso"
                  :value="ui.tipoCasoSeleccionado"
                ></v-select>
                <v-select
                  :items="ui.categoriasDeCaso"
                  label="Tipo de caso"
                  :value="ui.categoriaSeleccionada"
                ></v-select>
                <v-text-field label="Titulo" v-model="modelo.caso.titulo" />
                <v-textarea label="Descripcion" v-model="modelo.caso.descripcion" />
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-divider class="mt-12"></v-divider>
      <v-card-actions>
        <v-layout justify-center>
          <v-btn color="primary" small>
            <v-icon right dark>arrow_forward</v-icon>Enviar
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
export default {
  name: "formularioCaso",
  data() {
    return {
      ui: {
        tiposDeCaso: [
          { id: 1, texto: "Incidencia" },
          { id: 2, texto: "Solicitud" }
        ],
        tipoCasoSeleccionado: 1,
        categoriasDeCaso: [
          { id: -1, texto: "Seleccione una categoria" },
          { id: 1, texto: "Computador" },
          { id: 2, texto: "Red" }
        ],
        categoriaSeleccionada: -1
      },
      modelo: {
        caso: {
          tipo: this.tipoCasoSeleccionado,
          categoria: this.categoriaSeleccionada,
          titulo: "",
          descripcion: "",
          adjunto: null
        }
      }
    };
  }
};
</script>