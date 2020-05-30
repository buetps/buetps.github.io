<template>
  <div>
    <router-link :to="'/workshop/'+workshop.id+'/'+season.id">{{season.name}}</router-link>

    <v-slide-group show-arrows>
      <v-slide-item v-for="(page, pageIndex) in season.pages" :key=pageIndex class=pr-2>
        <router-link style="vertical-align:sub !important;" :to="'/workshop/'+workshop.id+'/'+season.id+'/'+page.id">{{page.name}}</router-link>
      </v-slide-item>
    </v-slide-group>
    <v-divider/>
    <transition name=slide-left mode=out-in>
      <router-view/>
    </transition>
  </div>

</template>

<script>
export default {
  computed: {
    workshop(){
      return this.$store.state.workshop;
    },
    season(){
      return this.$store.state.workshop_season;
    },
  },
}
</script>