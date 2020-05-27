<template>
  <div>
    <div class="display-1 font-weight-black" style="padding-right:20vw">{{season.name}}</div>
    <transition name=slide-left mode=out-in>
      <router-view/>
    </transition>
  </div>

</template>

<script>
export default {
  computed: {
    season(){
      return this.$store.state.workshop_season;
    },
  },
}
</script>