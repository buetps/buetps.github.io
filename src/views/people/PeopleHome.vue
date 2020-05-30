<template>
  <v-row>

    <v-col cols=12 xs=12 sm=12 md=4 lg=3>
      <v-row align="center">
        <v-col cols=12 xs=12>
          <v-card flat>
            <v-img :src="'/data/people/'+people.foldername+'/profile.jpg'" width=100% height=400px></v-img>
          </v-card>
          <v-card flat>
            <v-btn icon v-for="(linkID, linkIndex) in Object.keys(people.links)" :key=linkIndex target="_blank" :href=people.links[linkID]>
              <v-icon>{{getIconByLinkID(linkID)}}</v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols=12 xs=12 sm=12 md=7 offset-md=1 lg=8 offset-lg=1>
      <v-row align="center">
        <v-col cols=12 xs=12>
          <p v-for="(paragraph, paragraphIndex) in people.bio" :key=paragraphIndex>{{paragraph}}</p>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols=12 xs=12 sm=6 lg=4 v-for="(album, albumIndex) in people.albums" :key=albumIndex>
          <v-card flat :to="'/people/'+people.id+'/albums/'+album.id" outlined height=200px width=100%>
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