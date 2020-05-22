<template>
  <div>
    {{album.name}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    album(){
      return this.$store.state.album;
    },
  },
}
</script>