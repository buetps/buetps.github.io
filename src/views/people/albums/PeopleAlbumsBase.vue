<template>
 <div>
    <router-link style="padding-right:20vw" :to="'/people/'+people.id+'/albums/'+album.id">{{album.name}}</router-link>
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
    album(){
      return this.$store.state.album;
    },
  },
}
</script>