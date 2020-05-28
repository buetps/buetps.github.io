<template>
  <div>
    <router-link :to="'/workshop/'+workshop.id">{{workshop.name}}</router-link>
    <transition name=slide-left mode=out-in>
      <router-view :key=workshop></router-view>
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