<template>
  <v-app id="inspire">
    
    <v-navigation-drawer app floating>
        <v-list rounded>
          <v-list-item link v-for="(menuItem,menuIndex) in menu" :key=menuIndex :to="menuItem.link">
            <v-list-item-content>
              <v-list-item-title >{{menuItem.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
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
        menu
      }
    }
  }
</script>