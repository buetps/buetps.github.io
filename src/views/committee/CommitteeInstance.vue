<template>
  <div>
    {{committee}}
  </div>

</template>

<script>
export default {
  computed: {
    committee(){
      return this.$store.state.committee;
    },
  },
}
</script>