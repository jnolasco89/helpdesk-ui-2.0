<template>
  <v-app>
    <router-view></router-view>

    <v-dialog id="dialogCargando" max-width persistent>
      <v-progress-circular :size="70" :width="9" color="amber" indeterminate></v-progress-circular>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: "layout"
};
</script>