<template>
  <div>
   descriptuio
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