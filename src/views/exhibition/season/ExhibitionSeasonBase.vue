<template>
 <div>
    <router-link style="padding-right:20vw" :to="'/exhibition/'+exhibition.id+'/'+season.id">{{season.name}}</router-link>
    <transition name=slide-left mode=out-in>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    exhibition(){
      return this.$store.state.exhibition;
    },
    season(){
      return this.$store.state.exhibition_season;
    },
  },
}
</script>