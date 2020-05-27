<template>
  <v-app id="inspire">
    <!--
    <v-navigation-drawer app floating>
        <v-list rounded>
          <v-list-item link v-for="(menuItem,menuIndex) in menu" :key=menuIndex :to="menuItem.link">
            <v-list-item-content>
              <v-list-item-title >{{menuItem.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
-->

    <v-btn fab fixed flat class=ma-6 style="z-index:10;right:0" v-if=!drawer @click="drawer=true">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-navigation-drawer v-model="drawer" persistent app>
      <v-row justify="center" align="center">
        <div class="display-2 py-10">BUETPS</div>
      </v-row>
        <v-list >

          <v-subheader>Pinned</v-subheader>
          <v-divider></v-divider>
          <v-list-item v-for="(menuItem,menuIndex) in menu.pinned" :key="'pinned'+menuIndex" :to="menuItem.link" >
              <div class=pl-4>{{menuItem.name}}</div>
          </v-list-item>

          <v-subheader>Navigation</v-subheader>
          <v-divider></v-divider>
          <v-list-item v-for="(menuItem,menuIndex) in menu.navigation" :key=menuIndex :to="menuItem.link" >
               <div class=pl-4>{{menuItem.name}}</div>
          </v-list-item>

          <div v-if="recent!=null && recent.length>0">
            <v-subheader>Recently Visited</v-subheader>
            <v-divider></v-divider>
            <v-list-item v-for="(menuItem,menuIndex) in recent" :key=menuIndex :to="menuItem" >
                <div class=pl-4>{{menuItem}}</div>
            </v-list-item>
          </div>

        </v-list>
    </v-navigation-drawer>


    <v-content>
      <v-container fluid>
        <transition name=slide-left mode=out-in>
          <router-view/>
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
        menu
      }
    },
    computed: {
      recent() {
        return this.$store.state.recent;
      }
    }
  }
</script>