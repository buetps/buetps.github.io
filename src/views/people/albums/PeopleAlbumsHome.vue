<template>
  <div>
    <router-link v-for="(photo, photoIndex) in album.photos" 
      :key=photoIndex :to="'/people/'+people.id+'/albums/'+album.id+'/'+photo.id">
      {{photo.id}}
    </router-link>
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
