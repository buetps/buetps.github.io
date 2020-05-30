<template>
  <v-row align="center">
    <v-col cols=12 v-for="(season, seasonIndex) in workshop.seasons" :key=seasonIndex>
      <v-card flat :to="'/workshop/'+workshop.id+'/'+season.id" outlined width=100%>
        <v-card-title>{{season.name}}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    workshop(){
      return this.$store.state.workshop;
    },
  },
}
</script>