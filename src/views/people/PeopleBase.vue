<template>
 <div>
    <router-link :to="'/people/'+people.id">{{people.name}}</router-link>
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
  },
  mounted(){
    window.scrollTo(0,0);
  }
}
</script>