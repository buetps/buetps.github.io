<template>
  <div>
    <router-link v-for="(page, pageIndex) in season.pages" 
      :key=pageIndex :to="'/exhibition/'+exhibition.id+'/'+season.id+'/'+page.id">
      {{page.name}}
    </router-link>
  </div>

</template>

<script>
export default {
  computed: {
    exhibition(){
      return this.$store.state.exhibition;
    },
    season(){
      return this.$store.state.exhibition_season;
    },
  },
}
</script>