<template>
  <div>
    <v-row align="center">
      <v-col cols=12 v-for="(season, seasonIndex) in exhibition.seasons" :key=seasonIndex>
        <v-card flat :to="'/exhibition/'+exhibition.id+'/'+season.id" outlined width=100%>
          <v-card-title>{{season.name}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
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