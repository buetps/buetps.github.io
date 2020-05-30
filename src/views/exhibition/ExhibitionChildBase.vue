<template>
 <div>
    <router-link :to="'/exhibition/'+exhibition.id">{{exhibition.name}}</router-link>
    <transition name=slide-left mode=out-in>
      <router-view :key=exhibition.id></router-view>
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