<template>
  <v-container fluid>
    <v-card flat class="elevation-5">
      <v-card-title>Artículos</v-card-title>
      <br />
      <v-card-text id="barraFiltros">
        <v-toolbar dense flat>
          <v-toolbar-items>
            <v-text-field label="Titulo" placeholder="Escriba el titulo a buscar"></v-text-field>
            <v-menu
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="filtros.fecha"
                  label="Fecha"
                  prepend-icon="event"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="filtros.fecha"></v-date-picker>
            </v-menu>
          </v-toolbar-items>
        </v-toolbar>
      </v-card-text>
      <v-card-text id="listaArticulos">
        <v-container class="pa-2" fluid>
          <v-row>
            <v-col>
              <v-card v-for="articulo in articulos" v-bind:key="articulo.id" class="elevation-3">
                <v-card-text>
                  <v-row dense>
                    <v-col>
                      <h3>{{articulo.titulo}}</h3>
                    </v-col>
                    <v-btn color="deep-purple accent-4" text>Ver</v-btn>
                    <v-btn color="deep-purple accent-4" text>Editar</v-btn>
                    <v-btn color="deep-purple accent-4" text>Eliminar</v-btn>
                  </v-row>
                  <v-row dense>
                    <v-col cols="3">
                      <v-rating color="amber" half-increments dense size="14" readonly></v-rating>
                      <div class="grey--text ml-4">4.5 (413)</div>
                    </v-col>
                    <v-col cols="9">{{articulo.descripcion}}</v-col>
                    <v-chip-group active-class="deep-purple accent-4 white--text" column>
                      <v-chip
                        v-for="etiqueta in articulo.etiquetas"
                        v-bind:key="etiqueta.id"
                      >{{etiqueta.text}}</v-chip>
                    </v-chip-group>
                  </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-divider></v-divider>
                <v-divider></v-divider>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "articulosSoluciones",
  data() {
    return {
      filtros: {
        tema: null,
        fecha: null,
        etiquetas: []
      },
      articulos: [
        {
          id: 1,
          titulo: "Articulo 1",
          descripcion:
            "Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. ",
          etiquetas: [
            { id: 1, text: "SQL" },
            { id: 2, text: "C#" },
            { id: 3, text: "HTML" }
          ]
        },
        {
          id: 2,
          titulo: "Articulo 1",
          descripcion:
            "Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. ",
          etiquetas: [
            { id: 1, text: "SQL" },
            { id: 2, text: "C#" },
            { id: 3, text: "HTML" }
          ]
        },
        {
          id: 3,
          titulo: "Articulo 1",
          descripcion:
            "Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. ",
          etiquetas: [
            { id: 1, text: "SQL" },
            { id: 2, text: "C#" },
            { id: 3, text: "HTML" }
          ]
        },
        {
          id: 4,
          titulo: "Articulo 1",
          descripcion:
            "Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. ",
          etiquetas: [
            { id: 1, text: "SQL" },
            { id: 2, text: "C#" },
            { id: 3, text: "HTML" }
          ]
        },
        {
          id: 5,
          titulo: "Articulo 1",
          descripcion:
            "Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. Este es una descripcion de prueba para el articulo , se vera en la seccion text del card. ",
          etiquetas: [
            { id: 1, text: "SQL" },
            { id: 2, text: "C#" },
            { id: 3, text: "HTML" }
          ]
        }
      ]
    };
  }
};
</script>
<style>
#barraFiltros{
  padding-bottom: 0px!important;
}
#listaArticulos{
  padding-top: 0px!important;
}
</style>