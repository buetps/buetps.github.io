<template>
  <v-app id="inspire">

    <v-btn fixed icon class=ma-2 style="z-index:10;" v-if=!drawer @click="drawer=true">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-navigation-drawer v-model="drawer" persistent app width=300>
      <v-row justify="center" align="center">
        <router-link class="display-2 pt-10" flat to="/"><img src="/img/logo.svg" width=150px></router-link>
        <div>BUET Photographic Society</div>
      </v-row>
      <v-list >
        <div v-if="menu.pinned.length>0">
        <v-divider></v-divider>
        <v-subheader>Pinned</v-subheader>
        <v-list-item v-for="(menuItem,menuIndex) in menu.pinned" :key="'pinned'+menuIndex" :to="menuItem.link" >
            <div class=pl-4>{{menuItem.name}}</div>
        </v-list-item>
        </div>

        <v-divider></v-divider>
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
        menu
      }
    },
  }
</script>