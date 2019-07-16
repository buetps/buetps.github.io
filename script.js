import {activities} from "/pages/education.js";
import {committee} from "/pages/experience.js";
import {home} from "/pages/home.js";
import {people} from "/pages/blog.js";
import {nih} from "/pages/cv.js";

Vue.use(VueTreeNavigation);

 var website = {
    template: 
    `
    <div>
        <nav>
            <vue-tree-navigation />
        </nav>
        <main>
            <p>
                <router-link to="/education">Education</router-link>
                <router-link to="/experience">Experience</router-link>
                <router-link to="/blogs">Blog</router-link>
                <router-link to="/cv">CV</router-link>
            </p>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
    </div>
    `
};


const routes = [
    { path: "/", redirect: "/home" },
    { name: "Home", path: "/home", component: home },
    { name: "Activites", path: "/activities", component: activities },
    { name: "Committee", path: "/committee", component: committee },
    { name: "People", path: "/people", component: people, redirect: "/people/list",
        children: [
            { path: "list", component: nih},
            { name: "Naser Imran Hossain", path: "nih", component: nih },
            { name: "Aneek Mustafa Anwar", path: "sojaru", component: nih },
            { name: "Javed Miandad", path: "this", component: nih }
      ]
    }
  ];



const router = new VueRouter({
    routes: routes,
    path: '*', redirect: '/'
});

const app = new Vue({
    router,
    render: function(createElement) {
        return createElement(website);
    }
}).$mount('#vue-entry');
