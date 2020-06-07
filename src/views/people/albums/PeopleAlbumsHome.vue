<template>
  <v-overlay value=true color=#FFFFFF opacity=1 z-index=100 :dark=false>

    
    <v-btn style="z-index:101" fixed top right icon :to="'/people/'+people.id+'/albums'"><v-icon>mdi-close</v-icon></v-btn>

    <v-container fluid>

      <v-row >
        <v-col cols="12">
          <v-row justify=center>

            <v-col cols=12 xs=10 md=8 xl=6 v-if="!galleryFlag">
              <div><router-link :to="'/people/'+people.id">{{people.name}}</router-link></div>
              <div><router-link :to="'/people/'+people.id+'/albums/'+album.id">{{album.name}}</router-link></div>
              <p style="text-align:justify" v-for="(paragraph, paragraphIndex) in album.description" :key=paragraphIndex>{{paragraph}}</p>
              <v-progress-circular indeterminate size="24" v-if="!loadedFlag" style="position:fixed;bottom:18px;right:18px;"></v-progress-circular>
              <v-btn style="z-index:101" large fixed bottom right icon @click="galleryFlag=true" v-if="loadedFlag"><v-icon>mdi-chevron-right</v-icon></v-btn>
            </v-col>

            <v-card :max-height=height :max-width=width v-if="galleryFlag" flat tile>
              <div style="z-index:102;position:fixed;top:18px;left:24px;max-width:40%">
                <p><span>{{selectedPhotoIndex+1}} / {{album.photos.length}} </span><span v-if="selectedPhoto.name"> - {{selectedPhoto.name}}</span></p>
              </div>
              <div style="z-index:102;position:fixed;bottom:18px;left:24px;max-width:40%">
                <v-btn style="z-index:101" icon large @click=goLeft :disabled="selectedPhotoIndex==0"><v-icon>mdi-chevron-left</v-icon></v-btn>
                <v-btn style="z-index:101" icon large @click=goRight :disabled="selectedPhotoIndex == album.photos.length-1"><v-icon>mdi-chevron-right</v-icon></v-btn>
              </div>
              <div style="z-index:101;position:fixed;bottom:12px;right:24px;text-align:right">
                <p>© {{people.name}}</p>
              </div>
              <v-img v-for="(photo,photoIndex) in album.photos" :key=photoIndex v-show="photo.id==selectedPhoto.id" :src="'/data/people/'+people.id+'/'+album.id+'/'+photo.id+'.jpg'" :height=height contain></v-img>
            </v-card>
              <!--
              <v-carousel hide-delimiters mandatory :value=selectedPhotoIndex :continuous="false" >
                <v-carousel-item v-for="(photo, photoIndex) in album.photos" :key=photoIndex transition="fade-transition" reverse-transition="fade-transition">
                  <v-img :src="'/data/people/'+people.id+'/'+album.id+'/'+photo.id+'.jpg'" max-width=90%></v-img>
                  <p>{{photo.description}}asdasd</p>
                </v-carousel-item>
              </v-carousel>
              -->

          </v-row>
        </v-col>
      </v-row>

    </v-container>
  </v-overlay>
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
    selectedPhoto(){
      return this.album.photos[this.selectedPhotoIndex];
    }
  },
  data(){
    return {
      loadedFlag: false,
      selectedPhotoIndex: 0,
      galleryFlag: false,
      height: window.innerHeight-150,
      width: window.innerWidth-70,
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
    },
    goLeft(){
      if(this.selectedPhotoIndex != 0){
        this.selectedPhotoIndex--; 
      }
    },
    goRight(){
      if(this.selectedPhotoIndex != this.album.photos.length-1){
        this.selectedPhotoIndex++; 
      }
    },
    _keyListener(e){
      if(this.galleryFlag){
        switch(e.keyCode){
          case 37:
            this.goLeft();
            break;
          case 39:
            this.goRight();
            break;
          }
        }

        switch(e.keyCode){
          case 27:
            this.$router.replace('/people/'+this.people.id+'/albums');
            break
        }
      },
      resizeListener(e){
        this.height = window.innerHeight-150;
        this.width = window.innerWidth-70;
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
    document.addEventListener('keydown', this._keyListener);
    window.addEventListener('resize', this.resizeListener);
  },
  destroyed() {
    document.removeEventListener('keydown', this._keyListener);
    window.removeEventListener('resize', this.resizeListener);
  }
}
</script>