<template>
  <div>
    <router-link style="padding-right:20vw" :to="'/workshop/'+workshop.id+'/'+season.id">{{season.name}}</router-link>

    <v-slide-group show-arrows>
      <v-slide-item v-for="(page, pageIndex) in season.pages" :key=pageIndex>
        <v-btn class="mx-2" depressed rounded :to="'/workshop/'+workshop.id+'/'+season.id+'/'+page.id">
          {{page.name}}
        </v-btn>
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
    workshop(){
      return this.$store.state.workshop;
    },
    season(){
      return this.$store.state.workshop_season;
    },
  },
}
</script>