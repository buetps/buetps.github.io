<template>
  <v-row>

    <v-col cols=12 xs=12 sm=12 md=5 lg=4>
      <v-row align="center">
        <v-col cols=12 xs=12>
          <v-card flat>
            <v-img :src="'/data/people/'+people.id+'/profile.jpg'" width=100% height=400px></v-img>
          </v-card>
          <v-card flat>
            <v-btn class="mt-1" text block v-for="(linkID, linkIndex) in Object.keys(people.links)" :key=linkIndex target="_blank" :href=people.links[linkID]>
              {{linkID}}
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols=12 xs=12 sm=12 md=7 lg=8>
      <v-row align="center">
        <v-col cols=12 xs=12>

          <v-card flat>
            <v-card-title>Bio</v-card-title>
            <v-card-text style="text-align: justify;" v-for="(paragraph, paragraphIndex) in people.bio" :key=paragraphIndex>
              {{paragraph}}
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-title>Awards</v-card-title>
            <v-card-text style="text-align: justify;" v-for="(award, awardIndex) in awards" :key=awardIndex>
              {{award}}
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text style="text-align: right;">
              <v-btn text :to="'/people/'+people.id+'/albums'">View Albums</v-btn>
            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
      
    </v-col>

  </v-row>
</template>

<script>
import awards from '../../data/awards'
export default {
  computed: {
    people(){
      return this.$store.state.people;
    },
    awards(){
      var peopleID = this.people.id;
      return awards.filter(function(item){return item.photographerID == peopleID});
    }
  },
  methods: {
    getIconByLinkID(linkID){
      switch(linkID) {
        case "facebook":
          return "mdi-facebook";
        case "instagram":
          return "mdi-instagram";
        default:
          return "mdi-open-in-new";
      }
    },
    preloadImage(url){
      var img=new Image();
      img.src=url;
    }
  },

  mounted(){
    /*
    for(var i=0;i<this.people.albums.length;i++){
      for(var j=0;j<this.people.albums[i].photos.length;j++){
        this.preloadImage("/data/people/"+this.people.id+"/"+this.people.albums[i].id+"/"+this.people.albums[i].photos[j].id+".jpg");
      }
    }
    */
  }
}
</script>