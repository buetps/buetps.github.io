<template>
  <div>
    {{exhibition.name}}
    <transition name=slide-left mode=out-in>
      <router-view></router-view>
    </transition>
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