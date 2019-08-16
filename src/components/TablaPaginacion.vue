<template>
  <h1>Prueba</h1>
</template>

<script>
export default {
  name: "tablaPaginacion",
  data() {
    return {
      verDialog: true
    };
  },
  computed:{
    verModalCargando(){
      return this.$store.state.verModalCargando
    }
  }
};
</script>
