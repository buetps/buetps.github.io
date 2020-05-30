<template>
  <v-row align="center">
    <v-col cols=12 v-for="(season, seasonIndex) in exhibition.seasons" :key=seasonIndex>
      <v-card flat :to="'/exhibition/'+exhibition.id+'/'+season.id" outlined height=200px width=100%>
        <v-card-title>{{season.name}}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    exhibition(){
      return this.$store.state.exhibition;
    },
  },
}
</script>