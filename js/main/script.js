Vue.config.devtools = true;

Vue.use(VueTreeNavigation);


var website = {
    template: `<buetps></buetps>`,
    mounted() {
        document.addEventListener('keydown', function(event){
            if(event.keyCode === 32){
               event.preventDefault();
               this.$store.commit("toggleNav"); 
            }
        }.bind(this));
    },
};


import router from "/js/router/index.js";
import store from "/js/store/index.js";


const app = new Vue({
    router,
    store,
    render: function(createElement) {
        return createElement(website);
    }
}).$mount('#vue-entry');
