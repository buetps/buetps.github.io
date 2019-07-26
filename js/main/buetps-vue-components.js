import menuItems from "/js/data/menu.js";

Vue.component("buetps", {
    template: `
        <v-app>
            <v-navigation-drawer fixed touchless right stateless :disable-route-watcher=true :disable-resize-watcher="true" value="true" v-model="isNavOn" width=350>
                <v-layout align-center justify-space-between row>
                    <router-link to="/"><img class=logo src="images/logo.svg"></img></router-link>   
                    <!--<v-btn flat fab @click.stop="setNavFalse"><v-icon>close</v-icon></v-btn>-->
                </v-layout>
                <vue-tree-navigation :items="menuItems"/>
            </v-navigation-drawer>
            
            <v-btn absolute fab depressed light top right :fixed="this.isNavOn" color="white" style="top:16px !important; padding:4px;z-index:100" @click.stop="toggleNav">
                <v-icon>menu</v-icon>
            </v-btn>
            
            <v-content>
                <div style="padding:0px !important;margin:0px !important">
                    <v-layout justify-center align-center>
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </v-layout>
                </div>
            </v-content>
        </v-app>
    `,
    data: function(){
        return {
            menuItems,
        }
    },
    computed: {
        isNavOn: {
            get(){
                return this.$store.getters.getNavFlag;
            },
            set(){
                this.$store.commit('setNav', this.$store.getters.getNavFlag);
            }
        }
    },
    methods: {
        setNavTrue(){
            this.$store.commit('setNav', true);
        },
        setNavFalse(){
            this.$store.commit('setNav', false);
        },
        toggleNav(){
            this.$store.commit('setNav', !this.$store.getters.getNavFlag);
        }
    },
    mounted(){
        this._keyListener = function(e) {
            if(e.keyCode === 32){
                e.preventDefault();
                if(this.$store.getters.getNavFlag){
                    this.setNavFalse();
                } else {
                    this.setNavTrue();
                }
            }
        };
        document.addEventListener('keydown', this._keyListener.bind(this));
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this._keyListener);
    }
});


Vue.component('buetps-list-item', {
    template: `
    <v-list-tile>
        <v-list-tile-content>
            <v-list-tile-title>{{this.title}}</v-list-tile-title>
            <v-list-tile-sub-title>{{this.subtitle}}</v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
    `,
    props: ['title', 'subtitle'],
});
Vue.component('buetps-list', {
    template: `
    <v-list two-line>
        <slot></slot>
    </v-list>
    `
});

Vue.component("gallery-item", {
    template: `
    <v-carousel-item>
        <v-layout align-center justify-center>
            <v-img :src="this.src"></v-img>
        </v-layout>
    </v-carousel-item>
    `,
    props: ['src']
});

Vue.component("gallery", {
    template: `
        <v-window-item :value="this.$attrs.index" :key="this.$attrs.index" class=gallery>
            <div class="gallery-page-head">
                <div class="gallery-subtitle">{{this.subtitle}}</div>
                <div>
                    <span class="gallery-title">{{this.title}}</span>
                    <a v-if="this.description" class="gallery-description" @click="isDescription=true">description</a>
                </div>
            </div>

            <v-overlay :value="isDescription" opacity=1 z-index=101 color="white">
                <div style="width:90vw;height:80vh;color:#222222 !important;">
                    <div v-html="description" style="margin:5vh 5vw 5vh 5vw;padding:5vw;height:70vh;overflow-y: auto"></div>
                    <div style="text-align:center"><a @click="isDescription = false">close</a></div>
                </div>
            </v-overlay>

            <v-card-text class="gallery-page-content">
                <v-carousel hide-delimiters :continuous="false" :cycle="false" light prev-icon="chevron-left" next-icon="chevron-right" height="70vh" v-model=this.photo>
                    <slot></slot>
                </v-carousel>
            </v-card-text>

        </v-window-item>
    `,
    props: ['index', 'title', 'subtitle', 'description'],
    data() {
        return {
            photo: undefined,
            isDescription: false
        }
    },
    mounted() {
        var integerPhoto = 0;
        if (!isNaN(this.$route.params.photo)){
            integerPhoto = parseInt(this.$route.params.photo);
        }
        this.photo = integerPhoto;
    }
});


Vue.component("general-page-content", {
    template: `
        <v-window-item :value="this.$attrs.index" :key="this.$attrs.index">
            <div class="buetps-page-head" :style="'background-color:'+this.color">
                <div class="buetps-page-head-subtitle" v-if="this.subtitle">{{this.subtitle}}</div>
                <div class="buetps-page-head-title">{{this.title}}</div>
            </div>

            <v-card-text>
                <div class="buetps-page-content">
                    <slot></slot>
                </div>
            </v-card-text>

        </v-window-item>
    `,
    props: ['index', 'title', 'subtitle', 'color']
});
Vue.component("general-page", {
    template:`
    <v-card class="mx-auto" width=100vw min-height=100vh flat>
        
        
        <v-window v-model="step" touchless>
            <slot></slot>
        </v-window>

        <div v-if="this.windowItemCount>1" style="position:fixed;right:5vw;bottom:5vh;">
            <v-btn icon :disabled="step == 0" @click="step--"><v-icon>chevron_left</v-icon></v-btn>
            <v-btn icon :disabled="step == this.windowItemCount-1" @click="step++"><v-icon>chevron_right</v-icon></v-btn>
        </div>

    </v-card>
    `,
    data: function(){
        return {
            step: undefined,
            windowItemCount: 0
        }
    },
    methods: {
        goNext() {
            this.step = this.step < this.windowItemCount-1 ? this.step+1 : this.step;
        },
        goPrevious() {
            this.step = this.step > 0 ? this.step-1 : this.step;
        },
        determineWindowItemCount: function(){
            this.windowItemCount = document.getElementsByClassName("v-window__container")[0].children.length;
        },
        loadPageByStep: function(step){
            var integerStep = 0;
            if (!isNaN(step)){
                integerStep = parseInt(step);
            }
            this.step = integerStep;
        },
        loadAppropriatePage : function(){
            this.loadPageByStep(this.$route.params.page || 0);
        }
    },
    mounted(){
        /*
        this._keyListener = function(e) {
            switch(e.keyCode) {
                case 37:
                    e.preventDefault(); this.goPrevious(); break;
                case 39:
                    e.preventDefault(); this.goNext(); break;
            }
        };
        document.addEventListener('keydown', this._keyListener.bind(this));
        */
        
        this.determineWindowItemCount();
        this.loadAppropriatePage();
        
    },
    beforeDestroy() {
        /*
        document.removeEventListener('keydown', this._keyListener);
        */
    }
    
});