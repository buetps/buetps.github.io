<template>
  <div>
    <div>
    {{exhibition.name}}
    <transition name=slide-left mode=out-in>
      <router-view></router-view>
    </transition>
    </div>
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