<template>
  <div>
    <v-overlay :value="galleryFlag" color=#FFFFFF opacity=1 z-index=100 :dark=false>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <GalleryComponent :data="album.photos" :directory="'/data/people/'+people.id+'/'+album.id+'/'" :height=height></GalleryComponent>
          </v-col>
        </v-row>
      </v-container>
    </v-overlay>
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
      galleryFlag: true,
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
