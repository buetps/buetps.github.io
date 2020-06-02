<template>
 <div>
    <router-link :to="'/people/'+people.id+'/albums/'+album.id">{{album.name}}</router-link> 

    <v-overlay :value="descriptionFlag" color=#FFFFFF opacity=1 z-index=100 :dark=false>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row justify=center>
              <v-col cols=12 xs=12 md=6 style="min-width:500px">
                <div style="font-size: 20pt;font-weight: 700;">{{people.name}}</div>
                <div style="font-size: 28pt;font-weight: 900;">{{album.name}}</div>
                <p v-for="(paragraph, paragraphIndex) in album.description" :key=paragraphIndex>{{paragraph}}</p>
                <v-progress-circular indeterminate size="24" v-if="!loadedFlag"></v-progress-circular>
                <v-btn block large text @click="descriptionFlag = false" v-if="loadedFlag"><v-icon>mdi-chevron-right</v-icon></v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-overlay>

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
  data(){
    return {
      descriptionFlag: true,
      loadedFlag: false,
    }
  },
  methods: {
    preloadImages(album, allImagesLoadedCallback){
      var loadedCounter = 0;
      var toBeLoadedNumber = album.photos.length;
      var directory = '/data/people/'+this.people.id+'/'+album.id+'/';
      album.photos.forEach(function(photo){
        preloadImage(directory + photo.id + ".jpg", function(){
          loadedCounter++;
          console.log('Number of loaded images: ' + loadedCounter);
          if(loadedCounter == toBeLoadedNumber){
            allImagesLoadedCallback();
          }
        });
      });

      function preloadImage(url, anImageLoadedCallback){
        var img = new Image();
        img.onload = anImageLoadedCallback;
        img.src = url;
      };
    }

  },
  mounted(){
    window.scrollTo(0,0);
    var component = this;
    //preload album
    this.preloadImages(this.album, 
      function(){
        component.loadedFlag = true;
      }
    );
  }
}
</script>