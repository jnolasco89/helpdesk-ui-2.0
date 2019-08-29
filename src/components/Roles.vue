<template>
  <tabla-de-paginacion :config="configTabla"></tabla-de-paginacion>
</template>
<script>
import TablaDePaginacion from "./Generales/TablaDePaginacion.vue";
import ServiciosUsuario from "../services/usuarioService";

export default {
  name: "Roles",
  components: {
    TablaDePaginacion
  },
  data() {
    return {
      configTabla: {
        msjSinDatos: "Sin roles encontrados.",
        tituloTabla: "Roles",
        textoCargandoItems: "Cargando roles...",
        opcionesItemsPorPagina: [5, 10, 15, 20, 25, 50, 100],
        encabezados: [
          {
            text: "Nombre",
            align: "left",
            sortable: false,
            value: "nombre"
          },
          { text: "Descripcion", value: "descripcion" },
          { text: "Estado", value: "estado" },
          { text: "Acciones", value: "acciones", sortable: false }
        ],
        botonesDeAccion: {
          btnNuevo: {
            texto: "Crear rol",
            accion: function() {
              alert("Crear rol");
            }
          },
          btnBuscar: {
            texto: "Buscar rol",
            accion: function() {
              alert("Buscar rol");
            }
          },
          btnEditar: {
            visible: true,
            accion: function(item) {
              alert("Editar " + JSON.stringify(item));
            }
          },
          btnEliminar: {
            visible: true,
            accion: function(item) {
              alert("Elminar " + JSON.stringify(item));
            }
          }
        },
        ajax: true,
        funcionAjax: function() {
          return servUsario.prueba();
        }
      }
    };
  }
};
</script>