<template>
  <div>
    {{workshop.name}}
    <transition name=slide-left mode=out-in>
      <router-view></router-view>
    </transition>
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