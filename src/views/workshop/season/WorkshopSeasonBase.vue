<template>
  <div>
    {{season.name}}
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