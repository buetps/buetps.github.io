<template>
  <div>
    <router-link v-for="(page, pageIndex) in season.pages" 
      :key=pageIndex :to="'/workshop/'+workshop.id+'/'+season.id+'/'+page.id">
      {{page.name}}
    </router-link>
  </div>

</template>

<script>
export default {
  computed: {
    workshop(){
      return this.$store.state.workshop;
    },
    season(){
      return this.$store.state.workshop_season;
    },
  },
}
</script>