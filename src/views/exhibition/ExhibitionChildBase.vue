<template>
 <div>
    <router-link style="padding-right:20vw" :to="'/exhibition/'+exhibition.id">{{exhibition.name}}</router-link>
    <transition name=slide-left mode=out-in>
      <router-view :key=exhibition></router-view>
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