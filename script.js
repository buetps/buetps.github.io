Vue.config.devtools = true;


import home from "/pages/home.js";
import about from "/pages/about.js";
import notice from "/pages/notice.js";

//Committee
import committee from "/pages/committee/committee.js";
import committee15 from "/pages/committee/batch2015.js";
import committee14 from "/pages/committee/batch2014.js";
import committee13 from "/pages/committee/batch2013.js";
import committee12 from "/pages/committee/batch2012.js";
import committee11 from "/pages/committee/batch2011.js";
import committee10 from "/pages/committee/batch2010.js";
import committee09 from "/pages/committee/batch2009.js";
import committee08 from "/pages/committee/batch2008.js";

import activity from "/pages/activity/activity.js";

//Exhibition
import exhibition from "/pages/activity/exhibition/exhibition.js";

import vov from "/pages/activity/exhibition/vov/vov.js";
import divergence from "/pages/activity/exhibition/vov/divergence/divergence.js";
import belongingness from "/pages/activity/exhibition/vov/belongingness/belongingness.js";
import portraiture from "/pages/activity/exhibition/vov/portraiture/portraiture.js";

import annual from "/pages/activity/exhibition/annual/annual.js";
import annual13 from "/pages/activity/exhibition/annual/13/annual13.js";
import annual12 from "/pages/activity/exhibition/annual/12/annual12.js";
import annual11 from "/pages/activity/exhibition/annual/11/annual11.js";
import annual10 from "/pages/activity/exhibition/annual/10/annual10.js";

//Workshop
import workshop from "/pages/activity/workshop/workshop.js";

import loop from "/pages/activity/workshop/loop/loop.js";
import quintessentials from "/pages/activity/workshop/quintessentials/quintessentials.js";
import quintessentials1 from "/pages/activity/workshop/quintessentials/1/quintessentials1.js";
import quintessentials2 from "/pages/activity/workshop/quintessentials/2/quintessentials2.js";

import ds from "/pages/activity/workshop/ds/ds.js";
import ds1 from "/pages/activity/workshop/ds/1/ds1.js";
import ds2 from "/pages/activity/workshop/ds/2/ds2.js";

//People
import people from "/pages/people/people.js";
import nih from "/pages/people/05_naser/nih.js";
import shojaru from "/pages/people/07_aneek/aneek.js";
import javed from "/pages/people/09_javed/javed.js";






const routes = [
    {path: '/', component: home},
    {path: '/home', component: home, redirect: '/'},
    {path: '/about', component: about},
    {path: '/notice', component: notice},

    {path: '/committee', component: committee},
    {path: '/committee/15', component: committee15},
    {path: '/committee/14', component: committee14},
    {path: '/committee/13', component: committee13},
    {path: '/committee/12', component: committee12},
    {path: '/committee/11', component: committee11},
    {path: '/committee/10', component: committee10},
    {path: '/committee/09', component: committee09},
    {path: '/committee/08', component: committee08},


    {path: '/activity', component: activity},

    {path: '/activity/exhibition', component: exhibition},

    {path: '/activity/exhibition/vov', component: vov},
    {path: '/activity/exhibition/vov/divergence', component: divergence},
    {path: '/activity/exhibition/vov/belongingness', component: belongingness},
    {path: '/activity/exhibition/vov/portraiture', component: portraiture},

    {path: '/activity/exhibition/annual', component: annual},
    {path: '/activity/exhibition/annual/13', component: annual13},
    {path: '/activity/exhibition/annual/12', component: annual12},
    {path: '/activity/exhibition/annual/11', component: annual11},
    {path: '/activity/exhibition/annual/10', component: annual10},

    {path: '/activity/workshop', component: workshop},

    {path: '/activity/workshop/loop', component: loop},
    {path: '/activity/workshop/loop/9', component: activity},
    {path: '/activity/workshop/loop/8', component: activity},
    {path: '/activity/workshop/loop/7', component: activity},
    {path: '/activity/workshop/loop/6', component: activity},
    {path: '/activity/workshop/loop/5', component: activity},
    {path: '/activity/workshop/loop/4', component: activity},
    {path: '/activity/workshop/loop/3', component: activity},
    {path: '/activity/workshop/loop/2', component: activity},
    {path: '/activity/workshop/loop/1', component: activity},

    {path: '/activity/workshop/quintessentials', component: quintessentials},
    {path: '/activity/workshop/quintessentials/2', component: quintessentials2},
    {path: '/activity/workshop/quintessentials/1', component: quintessentials1},

    {path: '/activity/workshop/ds', component: ds},
    {path: '/activity/workshop/ds/2', component: ds2},
    {path: '/activity/workshop/ds/1', component: ds1},

    {path: '/people', component: people},
    {path: '/people/nih', component: nih},
    {path: '/people/shojaru', component: shojaru},
    {path: '/people/javed', component: javed},
];










Vue.use(VueTreeNavigation);

var website = {
    template: `<buetps></buetps>`,
};

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
