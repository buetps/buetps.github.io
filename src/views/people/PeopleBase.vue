<template>
 <div>
    <div :class=headingClass style="padding-right:20vw">{{people.name}}</div>
    <transition name=slide-left mode=out-in>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    people(){
      return this.$store.state.people;
    },
    headingClass(){
      if (this.$route.params.albumID){
        return "display-1 font-weight-black";
      } else {
        return "display-4 font-weight-black";
      }
    }
  },
}
</script>