<template>
 <div>
    <router-link :to="'/people/'+people.id+'/albums'">Albums</router-link>
    <v-row>
      <v-col cols=12>
        <v-row align="center">
          <v-col cols=12 xs=12 sm=6 lg=4 v-for="(album, albumIndex) in people.albums" :key=albumIndex>
            <v-card flat :to="'/people/'+people.id+'/albums/'+album.id" outlined height=200px width=100%>
              <v-card-title>{{album.name}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
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