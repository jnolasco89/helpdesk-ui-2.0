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
                  item-text="texto"
                  item-value="id"
                  label="Tipo de caso"
                  :value="ui.tipoCasoSeleccionado"
                  return-object
                  placeholder="Seleccione el tipo"
                  dense
                ></v-select>
                <v-select
                  :items="ui.categoriasDeCaso"
                  item-text="texto"
                  item-value="id"
                  label="Categoria"
                  :value="ui.categoriaSeleccionada"
                  return-object
                  placeholder="Seleccione una categoría"
                  dense
                ></v-select>
                <v-select
                  :items="ui.medios"
                  item-text="texto"
                  item-value="id"
                  label="Medio"
                  :value="ui.medioSeleccionado"
                  return-object
                  placeholder="Seleccione un medio"
                  dense
                ></v-select>
                <v-text-field label="Titulo" v-model="modelo.caso.titulo" />
                <v-textarea label="Descripcion" v-model="modelo.caso.descripcion" />
                <v-combobox
                  v-model="modelo.etiquetas"
                  :items="ui.comboBoxEtiquetas.etiquetas"
                  item-text="texto"
                  item-value="id"
                  :search-input.sync="ui.comboBoxEtiquetas.buscar"
                  :hide-selected="ui.comboBoxEtiquetas.hideSelected"
                  label="Etiquetas"
                  :multiple="ui.comboBoxEtiquetas.multiple"
                  persistent-hint
                  :small-chips="ui.comboBoxEtiquetas.chips"
                  :clearable="ui.comboBoxEtiquetas.clearable"
                  return-object
                  dense
                ></v-combobox>
                <v-file-input
                v-model="ui.adjunto"
                placeholder="Seleccione una imagen"
                label="Imagen"
                prepend-icon="mdi-paperclip"
                ></v-file-input>
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
        tipoCasoSeleccionado: null,
        categoriasDeCaso: [
          { id: 1, texto: "Computador" },
          { id: 2, texto: "Red" }
        ],
        categoriaSeleccionada: null,
        medios:[
          {id:1,texto:"Telefonico"},
          {id:2,texto:"Correo electrónico"},
          {id:3,texto:"Personal"}
        ],
        medioSeleccionado:null,
        comboBoxEtiquetas: {
          etiquetas: [
            {id:1,texto:"Tag1"},
            {id:2,texto:"Tag2"},
            {id:3,texto:"Tag3"}
          ],
          buscar: null,
          hideSelected: true,
          multiple: true,
          chips: true,
          clearable: true
        },
        adjunto:[]
      },
      modelo: {
        caso: {
          tipo: this.tipoCasoSeleccionado,
          categoria: this.categoriaSeleccionada,
          titulo: "",
          descripcion: "",
          adjunto: null,
          etiquetas: []
        }
      }
    };
  }
};
</script>