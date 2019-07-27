import home from "/js/pages/home.js";
import about from "/js/pages/about.js";
import notice from "/js/pages/notice.js";

//Committee
import committee from "/js/pages/committee/committee.js";
import committee15 from "/js/pages/committee/batch2015.js";
import committee14 from "/js/pages/committee/batch2014.js";
import committee13 from "/js/pages/committee/batch2013.js";
import committee12 from "/js/pages/committee/batch2012.js";
import committee11 from "/js/pages/committee/batch2011.js";
import committee10 from "/js/pages/committee/batch2010.js";
import committee09 from "/js/pages/committee/batch2009.js";
import committee08 from "/js/pages/committee/batch2008.js";
import committee07 from "/js/pages/committee/batch2007.js";
import committee06 from "/js/pages/committee/batch2006.js";
import committee05 from "/js/pages/committee/batch2005.js";

import activity from "/js/pages/activity/activity.js";

//Exhibition
import exhibition from "/js/pages/activity/exhibition/exhibition.js";

import vov from "/js/pages/activity/exhibition/vov/vov.js";
import divergence from "/js/pages/activity/exhibition/vov/divergence/divergence.js";
import belongingness from "/js/pages/activity/exhibition/vov/belongingness/belongingness.js";
import portraiture from "/js/pages/activity/exhibition/vov/portraiture/portraiture.js";

import annual from "/js/pages/activity/exhibition/annual/annual.js";
import annual13 from "/js/pages/activity/exhibition/annual/13/annual13.js";
import annual12 from "/js/pages/activity/exhibition/annual/12/annual12.js";
import annual11 from "/js/pages/activity/exhibition/annual/11/annual11.js";
import annual10 from "/js/pages/activity/exhibition/annual/10/annual10.js";

//Workshop
import workshop from "/js/pages/activity/workshop/workshop.js";

import loop from "/js/pages/activity/workshop/loop/loop.js";
import loop1 from "/js/pages/activity/workshop/loop/1/loop1.js";
import loop2 from "/js/pages/activity/workshop/loop/2/loop2.js";
import loop3 from "/js/pages/activity/workshop/loop/3/loop3.js";
import loop4 from "/js/pages/activity/workshop/loop/4/loop4.js";
import loop5 from "/js/pages/activity/workshop/loop/5/loop5.js";
import loop6 from "/js/pages/activity/workshop/loop/6/loop6.js";
import loop7 from "/js/pages/activity/workshop/loop/7/loop7.js";
import loop8 from "/js/pages/activity/workshop/loop/8/loop8.js";

import quintessentials from "/js/pages/activity/workshop/quintessentials/quintessentials.js";
import quintessentials1 from "/js/pages/activity/workshop/quintessentials/1/quintessentials1.js";
import quintessentials2 from "/js/pages/activity/workshop/quintessentials/2/quintessentials2.js";

import ds from "/js/pages/activity/workshop/ds/ds.js";
import ds1 from "/js/pages/activity/workshop/ds/1/ds1.js";
import ds2 from "/js/pages/activity/workshop/ds/2/ds2.js";

//People
import people from "/js/pages/people/people.js";
import nih from "/js/pages/people/05_naser/nih.js";
import shojaru from "/js/pages/people/07_aneek/aneek.js";
import javed from "/js/pages/people/09_javed/javed.js";
import dhrubo from "/js/pages/people/11_dhrubo/dhrubo.js";






const routes = [
    {path: '/', component: home},
    {path: '/home/', component: home, redirect: '/'},
    {path: '/about/', component: about},
    {path: '/notice/', component: notice},

    {path: '/committee/', component: committee},
    {path: '/committee/15/', component: committee15},
    {path: '/committee/14/', component: committee14},
    {path: '/committee/13/', component: committee13},
    {path: '/committee/12/', component: committee12},
    {path: '/committee/11/', component: committee11},
    {path: '/committee/10/', component: committee10},
    {path: '/committee/09/', component: committee09},
    {path: '/committee/08/', component: committee08},
    {path: '/committee/07/', component: committee07},
    {path: '/committee/06/', component: committee06},
    {path: '/committee/05/', component: committee05},

    {path: '/activity/', component: activity},

    {path: '/activity/exhibition/', component: exhibition},

    {path: '/activity/exhibition/vov/', component: vov},
    {path: '/activity/exhibition/vov/divergence/:page?', component: divergence, props: true},
    {path: '/activity/exhibition/vov/belongingness/:page?', component: belongingness, props: true},
    {path: '/activity/exhibition/vov/portraiture/:page?', component: portraiture, props: true},

    {path: '/activity/exhibition/annual/', component: annual},
    {path: '/activity/exhibition/annual/thirteen/:page?', component: annual13, props: true},
    {path: '/activity/exhibition/annual/twelve/:page?', component: annual12, props: true},
    {path: '/activity/exhibition/annual/eleven/:page?', component: annual11, props: true},
    {path: '/activity/exhibition/annual/ten/:page?', component: annual10, props: true},

    {path: '/activity/workshop/', component: workshop},

    {path: '/activity/workshop/loop/', component: loop},
    {path: '/activity/workshop/loop/eight/:page?', component: loop8, props: true},
    {path: '/activity/workshop/loop/seven/:page?', component: loop7, props: true},
    {path: '/activity/workshop/loop/six/:page?', component: loop6, props: true},
    {path: '/activity/workshop/loop/five/:page?', component: loop5, props: true},
    {path: '/activity/workshop/loop/four/:page?', component: loop4, props: true},
    {path: '/activity/workshop/loop/three/:page?', component: loop3, props: true},
    {path: '/activity/workshop/loop/two/:page?', component: loop2, props: true},
    {path: '/activity/workshop/loop/one/:page?', component: loop1, props: true},

    {path: '/activity/workshop/quintessentials/', component: quintessentials},
    {path: '/activity/workshop/quintessentials/two/:page?', component: quintessentials2, props: true},
    {path: '/activity/workshop/quintessentials/one/:page?', component: quintessentials1, props: true},

    {path: '/activity/workshop/ds/', component: ds,},
    {path: '/activity/workshop/ds/two/:page?', component: ds2, props: true},
    {path: '/activity/workshop/ds/one/:page?', component: ds1, props: true},

    {path: '/people/', component: people},
    {path: '/people/nih/:page?/:photo?', component: nih, props: true},
    {path: '/people/shojaru/:page?', component: shojaru, props: true},
    {path: '/people/javed/:page?', component: javed, props: true},
    {path: '/people/dhrubo/:page?/:photo?', component: dhrubo, props: true},
];



const router = new VueRouter({
    routes: routes,
    path: '*', redirect: '/'
});

export default router;