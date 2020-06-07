<template>
  <v-overlay value=true color=#FFFFFF opacity=1 z-index=100 :dark=false>

    
    <v-btn style="z-index:101" fixed top right icon :to="'/people/'+people.id+'/albums'"><v-icon>mdi-close</v-icon></v-btn>

    <v-container fluid>

      <v-row >
        <v-col cols="12">
          <v-row justify=center>

            <v-col cols=12 xs=12 md=8 v-if="!galleryFlag">
              <div style="font-size: 20pt;font-weight: 700;">{{people.name}}</div>
              <div style="font-size: 28pt;font-weight: 900;">{{album.name}}</div>
              <p style="text-align:justify" v-for="(paragraph, paragraphIndex) in album.description" :key=paragraphIndex>{{paragraph}}</p>
              <v-progress-circular indeterminate size="24" v-if="!loadedFlag"></v-progress-circular>
              <v-btn block large text @click="galleryFlag=true" v-if="loadedFlag"><v-icon>mdi-chevron-right</v-icon></v-btn>
            </v-col>

            <v-card :max-height=height :max-width=width v-if="galleryFlag" flat tile>
              <div style="z-index:101;position:fixed;bottom:18px;left:24px;">
                <p><span v-if="photo.name">{{photo.name}}</span></p>
              </div>
              <div style="z-index:101;position:fixed;bottom:18px;right:24px;">
                <p>© {{people.name}}</p>
              </div>
              <v-img :src="'/data/people/'+people.id+'/'+album.id+'/'+photo.id+'.jpg'" :height=height contain></v-img>
            </v-card>
              <!--
              <v-carousel hide-delimiters mandatory :value=selectedPhoto :continuous="false" >
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
    photo(){
      return this.album.photos[this.selectedPhoto];
    }
  },
  data(){
    return {
      loadedFlag: false,
      selectedPhoto: 0,
      galleryFlag: false,
      height: window.innerHeight-150,
      width: window.innerWidth-100,
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
    _keyListener(e){
      if(this.galleryFlag){
        switch(e.keyCode){
          case 37:
            if(this.selectedPhoto != 0){
              this.selectedPhoto--; 
            }
            break;
          case 39:
            if(this.selectedPhoto != this.album.photos.length-1){
              this.selectedPhoto++; 
            }
            break;
          }
        }
      },
      resizeListener(e){
        this.height = window.innerHeight-150;
        this.width = window.innerWidth-100;
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