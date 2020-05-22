<template>
  <div>
    {{page.name}}
  </div>
</template>

<script>
export default {
  computed: {
    page(){
      return this.$store.state.workshop_page;
    },
  },
}
</script>