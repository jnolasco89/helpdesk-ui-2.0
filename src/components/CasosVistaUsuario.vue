<template>
  <tabla-de-paginacion :config="configTabla"></tabla-de-paginacion>
</template>
<script>
import TablaDePaginacion from "./Generales/TablaDePaginacion.vue";
import ServiciosUsuario from "../services/usuarioService";

const servUsario = new ServiciosUsuario();

export default {
  name: "casosVistaUsuario",
  components: {
    TablaDePaginacion
  },
  data() {
    return {
      configTabla: {
        msjSinDatos: "Sin casos encontrados.",
        tituloTabla: "Casos",
        textoCargandoItems:"Cargando casos...",
        opcionesItemsPorPagina: [5, 10, 15, 20, 25, 50, 100],
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
            texto: "Crear caso",
            accion: function() {
              alert("Crear caso");
            }
          },
          btnBuscar: {
            texto: "Buscar caso",
            accion: function() {
              alert("Buscar caso");
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
        ajax:true,
        funcionAjax: function() {
          return servUsario.prueba();
        }
      }
    };
  }
};
</script>