<template>
 <div>
    <div class="display-3 font-weight-black" style="padding-right:20vw">{{exhibition.name}}</div>
    <transition name=slide-left mode=out-in>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: true
    }
  },
  computed: {
    exhibition(){
      return this.$store.state.exhibition;
    },
  },
}
</script>