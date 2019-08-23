<template>
  <v-container fluid>
    <v-card flat class="elevation-5">
      <v-card-title>{{tituloFormulario}}</v-card-title>
      <v-card-text>
        <v-container fluid fill-height>
          <v-layout align-center justify-center row fill-height>
            <v-flex xs12 sm11 md8 lg6 xl6>
              <v-form>
                <v-text-field label="Titulo" v-model="caso.titulo" />
                <v-textarea label="Descripcion" v-model="caso.descripcion" />
                <v-combobox
                  v-model="caso.etiquetas"
                  :items="etiquetas"
                  item-text="texto"
                  item-value="id"
                  :search-input.sync="comboBoxEtiquetas.buscar"
                  :hide-selected="comboBoxEtiquetas.hideSelected"
                  label="Etiquetas"
                  :multiple="comboBoxEtiquetas.multiple"
                  persistent-hint
                  :small-chips="comboBoxEtiquetas.chips"
                  :clearable="comboBoxEtiquetas.clearable"
                  return-object
                  dense
                ></v-combobox>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-divider class="mt-12"></v-divider>
      <v-card-actions>
        <v-layout justify-center>
          <v-btn color="primary" small>
            <v-icon right dark>arrow_forward</v-icon>Crear
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
  name: "formularioArticulo",
  data() {
    return {
      tituloFormulario: "Crear Artículo",
      etiquetas: [],
      comboBoxEtiquetas: {
        buscar: null,
        hideSelected: true,
        multiple: true,
        chips: true,
        clearable: true
      },
      caso: {
        titulo: "",
        descripcion: "",
        etiquetas: []
      }
    };
  }
};
</script>