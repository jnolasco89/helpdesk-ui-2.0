<template>
  <v-container fluid>
    <v-card id="lateral" flat class="elevation-5">
      <v-card-text>
        <v-data-table
          :headers="config.encabezados"
          :items="items"
          :options.sync="opcionesDefaultDataTable"
          :server-items-length="totalItems"
          :loading="cargando"
          hide-default-footer
          class="elevation-1"
          dense
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>{{config.tituloTabla}}</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-select
                :items="config.itemsPorPagina"
                label="Filas por pagina"
                :value="opcionesDefaultDataTable.itemsPerPage"
                @input="opcionesDefaultDataTable.itemsPerPage = parseInt($event, 10)"
                class="select-items-por-pagina"
              ></v-select>
              <v-text-field append-icon="search" label="Buscar caso" single-line hide-details></v-text-field>
              <v-btn
                color="primary"
                dark
                class="mb-2 btn-buscar"
                small
              >{{config.botonesDeAccion.btnBuscar.texto}}</v-btn>
              <v-btn
                color="primary"
                dark
                class="mb-2 btn-nuevo"
                small
              >{{config.botonesDeAccion.btnNuevo.texto}}</v-btn>
            </v-toolbar>
          </template>
          <template
            v-slot:item.acciones="{ item }"
            v-if="config.botonesDeAccion.btnEditar.visible || config.botonesDeAccion.btnEliminar.visible"
          >
            <v-icon
              small
              class="mr-2"
              @click="editarItem(item)"
              v-if="config.botonesDeAccion.btnEditar.visible"
            >edit</v-icon>
            <v-icon
              small
              @click="eliminarItem(item)"
              v-if="config.botonesDeAccion.btnEliminar.visible"
            >delete</v-icon>
          </template>
          <template v-slot:no-data>
            <v-alert>{{config.msjSinDatos}}</v-alert>
          </template>
        </v-data-table>
        <div class="pt-2">
          <v-pagination
            v-model="opcionesDefaultDataTable.page"
            :length="numeroDePaginas"
            total-visible="10"
            circle
          ></v-pagination>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
/*
Objetos a recibir como paramtro:
1)
config:{
    filtros:[{valor:1,texto:"x"}, ... ],
    encabezados:[{key:"x",valor:1,texto:"x"}, ... ] 
}
2)
data:[{id:1,texto:"x"}]
*/
import UsuarioService from "../../services/usuarioService";

const usrServ = new UsuarioService();

export default {
  name: "tablaPaginacion",
  props: {
    config: {
      type: Object,
      default: function() {
        return {
          msjSinDatos: "Sin datos encontrados.",
          tituloTabla: "Casos",
          filtros: [],
          itemsPorPagina: [5, 10, 15, 20, 25, 50, 100],
          encabezados: [
            {
              text: "FuenteID",
              align: "left",
              sortable: false,
              value: "FuenteID"
            },
            { text: "FuenteDsc", value: "FuenteDsc" },
            { text: "TemaID", value: "TemaID" },
            { text: "TemaDsc", value: "TemaDsc" },
            { text: "AnioMin", value: "AnioMin" },
            { text: "AnioMax", value: "AnioMax" },
            { text: "Acciones", value: "acciones", sortable: false }
          ],
          botonesDeAccion: {
            btnNuevo: {
              texto: "Crear"
            },
            btnBuscar: {
              texto: "Buscar"
            },
            btnEditar: {
              visible: true,
              accion: function(item) {
                alert("EDITAR: " + JSON.stringify(item));
              }
            },
            btnEliminar: {
              visible: true,
              accion: function(item) {
                alert("ELIMINAR: " + JSON.stringify(item));
              }
            }
          },
          funcionAjax: function() {
            return usrServ.prueba();
          },
          ajax: true,
          datos: []
        };
      }
    }
  },
  mounted() {
    if (this.ajax) {
      this.getDatosDeLaApi().then(data => {
        this.items = data.itemsApi;
        this.totalItems = data.totalItemsApi;
      });
    } else {
      this.items = this.config.datos;
    }
  },
  data() {
    return {
      totalItems: 0,
      items: [],
      cargando: true,
      opcionesDefaultDataTable: {},
      numeroDePaginas: 0
    };
  },
  watch: {
    opcionesDefaultDataTable: {
      handler() {
        if (this.ajax) {
          this.getDatosDeLaApi().then(data => {
            this.items = data.itemsApi;
            this.totalItems = data.totalItemsApi;
          });
        } else {
          this.getDatosLocalmente();
        }
      },
      deep: true
    }
  },
  methods: {
    editarItem: function(item) {
      this.config.botonesDeAccion.btnEditar.accion(item);
    },
    eliminarItem: function(item) {
      this.config.botonesDeAccion.btnEliminar.accion(item);
    },
    getDatosDeLaApi: function() {
      this.cargando = true;
      return new Promise((resolve, reject) => {
        const {
          sortBy,
          descending,
          page,
          itemsPerPage
        } = this.opcionesDefaultDataTable;

        const self = this;
        this.config.funcionAjax().then(respuesta => {
          let itemsApi = respuesta.data;
          const totalItemsApi = itemsApi.length;
          self.numeroDePaginas = Math.ceil(
            totalItemsApi / this.opcionesDefaultDataTable.itemsPerPage
          );

          if (itemsPerPage > 0) {
            itemsApi = itemsApi.slice(
              (page - 1) * itemsPerPage,
              page * itemsPerPage
            );
          }

          self.cargando = false;

          resolve({
            itemsApi,
            totalItemsApi
          });
        });
      });
    },
    getDatosLocalmente() {}
  }
};
</script>
<style>
.btn-buscar {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

.btn-nuevo {
  margin-top: 10px;
}

.select-items-por-pagina {
  margin-top: 22.3px !important;
  margin-right: 5px !important;
}
</style>