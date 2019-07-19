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

            <v-btn absolute fab depressed light top right color="white" style="top:16px !important; padding:4px;" @click.stop="toggleNav" v-if="!drawer">
                <v-img src="./images/logo.svg"></v-img>
            </v-btn>

            <transition name="fade" mode="out-in">
                <router-view :style="routerViewStyle"></router-view>
            </transition>

        </v-app>
    `,
    data: function(){
        return {
            menuItems: menuItems,
            routerViewStyle: "padding-left:0px",
            drawer : false,
        }
      },
      props: {
          nav: Boolean
      },
      methods: {
        toggleNav(){
            this.drawer=!this.drawer;
            this.$emit('update:this.nav', true);
        }
      },
      watch: {
          drawer: function(val){
              this.routerViewStyle = val ? "padding-left:300px;" : "padding-left:0px";
          }
      },
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