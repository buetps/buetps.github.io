<template>
 <div>
    <div class="display-3 font-weight-black" style="padding-right:20vw">{{album.name}}</div>
    <transition name=slide-left mode=out-in>
      <router-view></router-view>
    </transition>
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