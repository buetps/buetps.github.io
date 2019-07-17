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
            <v-navigation-drawer stateless fixed value="true" v-model="drawer" app>
                <v-layout align-center justify-space-between row>
                    <router-link to="/"><img class=logo src="images/logo.svg"></img></router-link>
                    <v-btn flat fab @click.stop="drawer = !drawer"><v-icon>chevron_left</v-icon></v-btn>
                </v-layout>
                <vue-tree-navigation :items="menuItems"/>
            </v-navigation-drawer>

        
            <v-content>
                <v-container fill-height>
                    <v-btn absolute fab depressed light fixed top right color="white" @click.stop="drawer = !drawer" style="top:16px !important;" v-if="!drawer">
                        <v-icon>menu</v-icon>
                    </v-btn>
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </v-container>
            </v-content>
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