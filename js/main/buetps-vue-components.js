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

import menuItems from "/js/data/menu.js";

Vue.component("buetps", {
    template: `
        <v-app>

            <v-navigation-drawer fixed stateless floating light app temporary value="true" :value="isNavOn" width=350>
                <v-layout align-center justify-space-between row>
                    <router-link to="/"><img class=logo src="images/logo.svg"></img></router-link>
                    <v-btn flat fab @click.stop="toggleNav"><v-icon>chevron_left</v-icon></v-btn>
                </v-layout>
                <vue-tree-navigation :items="menuItems"/>
            </v-navigation-drawer>

            <v-btn absolute fab depressed light top right color="white" style="top:16px !important; padding:4px;" @click.stop="toggleNav" v-if="!isNavOn">
                <v-img src="./images/logo.svg"></v-img>
            </v-btn>

            <v-content>
                <v-container fill-width>
                    <v-layout justify-center align-center>
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </v-layout>
                </v-container>
            </v-content>

        </v-app>
    `,
    data: function(){
        return {
            menuItems,
        }
    },
    computed: {
        isNavOn() {
            return this.$store.getters.getNavFlag;
        }
    },
    methods: {
        toggleNav(){
            this.$store.commit('toggleNav');
        }
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

Vue.component("general-page", {
    template:`
    <v-card class="mx-auto" width=100vw min-height=100vh flat>
        <div class="buetps-page-head" :style="'background-color:'+this.$attrs.color">
            <div class="buetps-page-head-subtitle" v-if="this.$attrs.subtitle">{{this.$attrs.subtitle}}</div>
            <div class="buetps-page-head-title">{{this.$attrs.title}}</div>
        </div>
        
        <v-window v-model="step">
            <v-window-item v-for="(page,index) in this.$attrs.pages" :value="index+1" :key="index">
                <v-card-text>
                    <div class="buetps-page-content" v-html="page.content"></div>
                </v-card-text>
            </v-window-item>
        </v-window>


        <div v-if="this.$attrs.pages.length>1" style="position:fixed;right:5vw;bottom:5vh;">
            <v-btn icon :disabled="step === 1" @click="step--"><v-icon>chevron_left</v-icon></v-btn>
            <v-btn icon :disabled="step === this.$attrs.pages.length" @click="step++"><v-icon>chevron_right</v-icon></v-btn>
        </div>

    </v-card>
    `,
    prop: ['color', 'title', 'pages', 'subtitle'],
    data: function(){
        return {
            step: 1
        }
    },
    methods: {
        goNext: function(){
            if(this.step < this.$attrs.pages.length){
                this.step++;
            }
        },
        goPrevious: function(){
            if(this.step > 1){
                this.step--;
            }
        }
    },
    mounted(){
        this._keyListener = function(e) {
            switch(e.keyCode) {
                case 37:
                    e.preventDefault();
                    this.goPrevious();
                    break;
                case 39:
                    e.preventDefault();
                    this.goNext();
                    break;
                default:
                  //
            }
        };
        document.addEventListener('keydown', this._keyListener.bind(this));
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this._keyListener);
    }
    
});

