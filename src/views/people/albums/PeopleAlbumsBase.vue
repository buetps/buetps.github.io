<template>
 <div>
    <router-link :to="'/people/'+people.id+'/albums/'+album.id">{{album.name}}</router-link> 
    <a class="mx-2" @click="descriptionFlag=true">info</a>

    <v-overlay :value="descriptionFlag" color=#FFFFFF opacity=1 z-index=100 dark=false>
      <v-btn icon @click="descriptionFlag = false" fixed top=20px right=20px><v-icon>mdi-close</v-icon></v-btn>\

      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align=center justify=center>
                <p style="width:70%" v-for="(paragraph, paragraphIndex) in album.description" :key=paragraphIndex>{{paragraph}}</p>
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
      descriptionFlag: false,
    }
  },
  mounted(){
    window.scrollTo(0,0);
  }
}
</script>