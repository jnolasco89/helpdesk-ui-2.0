<template>
  <v-container fluid>
    <v-card flat class="elevation-5">
      <v-card-title>Artículos</v-card-title>
      <v-card-text>
        <v-container class="pa-2" fluid>
          <v-row>
            <v-col>
              <v-card max-height="100px">
                <v-card-text>
                    <v-row dense>
                        <v-col>
                            Titulo Articulo
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="3">
                            <v-rating color="amber" half-increments dense size="14" readonly></v-rating>
                            <div class="grey--text ml-4">4.5 (413)</div>
                        </v-col>
                        <v-col cols="9">
                             <div class="my-4 subtitle-1 black--text">$.Italian, Cafe</div>
                            <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
                        </v-col>
                    </v-row>
                  
                  
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <!--
        <v-card>
          <v-card-title>Nombre Articulo</v-card-title>
          <v-card-text>
            <v-row align="center">
              <v-rating color="amber" half-increments dense size="14" readonly></v-rating>
              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>
            <div class="my-4 subtitle-1 black--text">$.Italian, Cafe</div>
            <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <div class="title text--primary">Tonight's availability</div>
              <v-chip-group active-class="deep-purple accent-4 white--text" column>
                <v-chip>5:30PM</v-chip>
                <v-chip>7:30PM</v-chip>
                <v-chip>8:00PM</v-chip>
                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-purple accent-4" text>Reserve</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
        -->
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "articulosSoluciones"
};
</script>