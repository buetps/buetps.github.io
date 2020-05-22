<template>
  <div>
    <router-link v-for="(album, albumIndex) in people.albums" 
      :key=albumIndex :to="'/people/'+people.id+'/albums/'+album.id">
      {{album.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    people(){
      return this.$store.state.people;
    },
  },
}
</script>