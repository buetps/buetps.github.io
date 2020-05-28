<template>
  <div>
    <router-link style="padding-right:20vw" :to="'/workshop/'+workshop.id+'/'+season.id">{{season.name}}</router-link>
    <transition name=slide-left mode=out-in>
      <router-view/>
    </transition>
  </div>

</template>

<script>
export default {
  computed: {
    workshop(){
      return this.$store.state.workshop;
    },
    season(){
      return this.$store.state.workshop_season;
    },
  },
}
</script>