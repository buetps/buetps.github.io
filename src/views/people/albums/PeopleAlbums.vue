<template>
 <div>
    <router-link :to="'/people/'+people.id+'/albums'">Albums</router-link>
    <v-row align="center">
      <v-col cols=12 xs=12 v-for="(album, albumIndex) in people.albums" :key=albumIndex>
        <v-card flat :to="'/people/'+people.id+'/albums/'+album.id">
            <v-row no-gutters>
              <v-col cols=12 xs=12 md=4>
                <v-img :src="'/data/people/'+people.id+'/'+album.id+'/'+album.photos[0].id+'.jpg'" height=300px width=100%></v-img>
              </v-col>
              <v-col cols=12 xs=12 md=8 class=px-6 style="max-height:300px;overflow-y:auto">
                <v-card-title>{{album.name}}</v-card-title>
                <v-card-text style="text-align: justify;"  v-for="(paragraph, paragraphIndex) in album.description" :key=paragraphIndex>
                  <p>{{paragraph}}</p>
                </v-card-text>
              </v-col>
            </v-row>
        </v-card>
      </v-col>
    </v-row>
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