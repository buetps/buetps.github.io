<template>
  <v-app>

    <v-btn icon elevation=2 class=ma-3 style="z-index:10;position: absolute" v-if=!drawer @click="drawer=true">
      <v-img width=10px src="/img/logo.svg"></v-img>
    </v-btn>

    <v-navigation-drawer v-model="drawer" persistent app width=300>
      <v-row justify="center" align="center">
        <router-link class="pt-10" flat to="/">
          <img src="/img/logo_noborder.svg" height=90px class=hover>
        </router-link>
      </v-row>
      <v-list >
        <div v-if="menu.pinned.length>0">
        <v-subheader>Pinned</v-subheader>
        <v-list-item v-for="(menuItem,menuIndex) in menu.pinned" :key="'pinned'+menuIndex" :to="menuItem.link" >
            <div class=pl-4>{{menuItem.name}}</div>
        </v-list-item>
        </div>

        <v-subheader>Menu</v-subheader>
        <v-list-item v-for="(menuItem,menuIndex) in menu.navigation" :key=menuIndex :to="menuItem.link" >
              <div class=pl-4>{{menuItem.name}}</div>
        </v-list-item>
      </v-list>
      <v-spacer/>
      
    </v-navigation-drawer>


    <v-content>
      <v-container fluid class=pa-12>
        <transition name=slide-left mode=out-in>
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import menu from "./data/menu"
  export default {
    data(){
      return {
        drawer: true,
        menu,
      }
    },
  }
</script>

<style scoped>
.hover {
  -webkit-transition: filter .2s, opacity .3s ease-out;
  -moz-transition: filter .2s, opacity .3s ease-out;
  -o-transition: filter .2s, opacity .3s ease-out;
  transition: filter .2s, opacity .3s ease-out;
  
} 
.hover:hover {
  -webkit-filter: drop-shadow(0px 3px 8px rgba(0,0,0,.3));
  filter: drop-shadow(0px 0px 8px rgba(0,0,0,.3));
}

.hidden {
  opacity: 0;
}

</style>