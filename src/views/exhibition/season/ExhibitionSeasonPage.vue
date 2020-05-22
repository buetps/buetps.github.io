<template>
  <div>
    {{page.name}}
  </div>
</template>

<script>
export default {
  computed: {
    page(){
      return this.$store.state.exhibition_page;
    },
  },
}
</script>