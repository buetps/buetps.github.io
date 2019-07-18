Vue.component("profile", {
    props:['profile'],
    template: `
        <div>
            <v-avatar size=80 color="grey lighten-4">
                <img :src="this.profile.portrait" :alt="this.profile.name">
            </v-avatar>
            <h1>{{this.profile.name}}</h1>
            <h3>Active Member {{this.profile.joinDate}} - {{this.profile.leavingDate}}</h3>
        </div>
    `
});

import menuItems from "./menu.js";

Vue.component("buetps", {
    template: `
        <v-app>

            <v-navigation-drawer absolute stateless floating light app temporary value="true" v-model="drawer">
                <v-layout align-center justify-space-between row>
                    <router-link to="/"><img class=logo src="images/logo.svg"></img></router-link>
                    <v-btn flat fab @click.stop="drawer = !drawer"><v-icon>chevron_left</v-icon></v-btn>
                </v-layout>
                <vue-tree-navigation :items="menuItems"/>
            </v-navigation-drawer>

            <v-btn absolute fab depressed light top right color="white" @click.stop="drawer = !drawer" style="top:16px !important; padding:4px;" v-if="!drawer">
                <v-img src="./images/logo.svg"></v-img>
            </v-btn>

            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>

        </v-app>
    `,
    data: function(){
        return {
            drawer: false,
            menuItems: menuItems
        }

      },
      props: {
        source: String
      }
});

Vue.component("page-head", {
    template:`
        <div :style=componentStyle>
            <h1><slot></slot></h1>
        </div>
    `,
    prop: ['color'],
    computed: {
        componentStyle: function(){
            return "color:" + this.$attrs.color; 
        }
    }
});