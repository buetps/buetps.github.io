<template>
  <div>
    <router-link v-for="(season, seasonIndex) in workshop.seasons" 
      :key=seasonIndex :to="'/workshop/'+workshop.id+'/'+season.id">
      {{season.name}}
    </router-link>
  </div>
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