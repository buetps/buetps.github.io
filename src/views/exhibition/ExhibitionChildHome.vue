<template>
  <div>
    <router-link v-for="(season, seasonIndex) in exhibition.seasons" 
      :key=seasonIndex :to="'/exhibition/'+exhibition.id+'/'+season.id">
      {{season.name}}
    </router-link>
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