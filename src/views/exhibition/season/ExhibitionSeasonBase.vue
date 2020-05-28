<template>
  <div>
    <router-link style="padding-right:20vw" :to="'/exhibition/'+exhibition.id+'/'+season.id">{{season.name}}</router-link>

    <v-slide-group show-arrows style="display:inline">
      <v-slide-item v-for="(page, pageIndex) in season.pages" :key=pageIndex class=pr-2>
        <router-link style="vertical-align:sub !important;" :to="'/exhibition/'+exhibition.id+'/'+season.id+'/'+page.id">{{page.name}}</router-link>
      </v-slide-item>
    </v-slide-group>

    <transition name=slide-left mode=out-in>
      <router-view/>
    </transition>
  </div>

</template>

<script>
export default {
  computed: {
    exhibition(){
      return this.$store.state.exhibition;
    },
    season(){
      return this.$store.state.exhibition_season;
    },
  },
}
</script>