<template>
  <v-dialog id="dialogAutenticacion" v-model="verModalCargando" max-width persistent>
    <v-progress-circular :size="70" :width="9" color="amber" indeterminate></v-progress-circular>
  </v-dialog>
</template>

<script>
export default {
  name: "dialogCargando",
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
<style>
.v-dialog {
  overflow: hidden !important;
  box-shadow: 0 0 0 0 !important;
  -webkit-box-shadow: 0 0 0 0 !important;
  position:relative!important;
  text-align: center!important;
}
</style>