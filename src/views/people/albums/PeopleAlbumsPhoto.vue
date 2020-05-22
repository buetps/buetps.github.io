<template>
  <div>
    {{photo.name}}
  </div>
</template>

<script>
export default {
  computed: {
    photo(){
      return this.$store.state.photo;
    },
  },
}
</script>
