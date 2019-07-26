Vue.config.devtools = true;

Vue.use(VueTreeNavigation);

var website = {
    template: `<buetps></buetps>`
};


import router from "/js/router/index.js";
import store from "/js/store/index.js";


const app = new Vue({
    router,
    store,
    render: function(createElement) {
        return createElement(website);
    },
    vuetify: new Vuetify(),
}).$mount('#vue-entry');
