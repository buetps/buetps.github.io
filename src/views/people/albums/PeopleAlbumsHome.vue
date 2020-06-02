<template>
  <div>
    <GalleryComponent :data="album.photos" :directory="'/data/people/'+people.id+'/'+album.id+'/'" :height=height></GalleryComponent>
  </div>
</template>

<script>
import GalleryComponent from "../../../components/GalleryComponent"
export default {
  components: {
    GalleryComponent
  },
  computed: {
    people(){
      return this.$store.state.people;
    },
    album(){
      return this.$store.state.album;
    },
  },
  data(){
    return {
      height: window.innerHeight-300,
    }
  },
  methods: {
    resizeListener(e){
      this.height = window.innerHeight-300;
    }
  },
  mounted(){
    window.addEventListener('resize', this.resizeListener);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeListener);
  }
}
</script>
