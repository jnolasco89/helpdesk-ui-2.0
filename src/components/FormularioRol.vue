<template>
  <v-container fluid>
    <v-card flat class="elevation-5">
      <v-card-title>{{ui.tituloFormulario}}</v-card-title>
      <v-card-text>
        <v-container fluid fill-height>
          <v-layout align-center justify-center row fill-height>
            <v-flex xs12 sm11 md8 lg6 xl6>
              <v-form>
                <v-text-field label="Nombre" v-model="rol.nombre" />
                <v-textarea label="Descripcion" v-model="rol.descripcion" />
              </v-form>
              <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="name"
                group-by="category"
                class="elevation-1"
                show-group-by
              ></v-data-table>
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
export default {
  name: "formularioCaso",
  data() {
    return {
      ui: {
        tituloFormulario: "Agregar Rol",
        cabezeraTabla:[
            {
                text:"Nombre",
                value:"nombre"
            },
            {
                text:"Descripción",
                value:"descripcion"
            }
        ]
      },
      menus: [
        {
          id: 11,
          nombre: "Crear rol",
          permiso: true,
          padre: {
            id: 1,
            nombre: "Rol"
          }
        },
        {
          id: 12,
          nombre: "Editar rol",
          permiso: true,
          padre: {
            id: 1,
            nombre: "Rol"
          }
        },
        {
          id: 13,
          nombre: "Eliminar rol",
          permiso: true,
          padre: {
            id: 1,
            nombre: "Rol"
          }
        },
        {
          id: 14,
          nombre: "Ver rol",
          permiso: true,
          padre: {
            id: 1,
            nombre: "Rol"
          }
        },
        {
          id: 21,
          nombre: "Crear Usuario",
          permiso: true,
          padre: {
            id: 2,
            nombre: "Usuario"
          }
        },
        {
          id: 22,
          nombre: "Editar usuario",
          permiso: true,
          padre: {
            id: 2,
            nombre: "Usuario"
          }
        },
        {
          id: 23,
          nombre: "Eliminar usuario",
          permiso: true,
          padre: {
            id: 2,
            nombre: "Usuario"
          }
        },
        {
          id: 24,
          nombre: "Ver rol",
          permiso: true,
          padre: {
            id: 2,
            nombre: "Rol"
          }
        }
      ]
    };
  }
};
</script>