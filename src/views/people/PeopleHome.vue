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
          <p style="text-align: justify;" v-for="(paragraph, paragraphIndex) in people.bio" :key=paragraphIndex>{{paragraph}}</p>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols=12 xs=12 sm=12 md=6 v-for="(album, albumIndex) in people.albums" :key=albumIndex>
          <v-card flat :to="'/people/'+people.id+'/albums/'+album.id" outlined>
            <v-img :src="'/data/people/'+people.id+'/'+album.id+'/'+album.photos[0].id+'.jpg'" height=200px></v-img>
            <v-card-title>{{album.name}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

  </v-row>
</template>

<script>
export default {
  computed: {
    people(){
      return this.$store.state.people;
    },
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
  }
}
</script>