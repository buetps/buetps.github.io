<template>
 <div>
    <div class="display-3 font-weight-black" style="padding-right:20vw">{{committee}}</div>
    <transition name=slide-left mode=out-in>
      <router-view></router-view>
    </transition>
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