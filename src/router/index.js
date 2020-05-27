import Vue from 'vue'
import VueRouter from 'vue-router'

import store from "../store"

import Home from '../views/Home.vue'

import People from '../views/people/People.vue'
import PeopleBase from '../views/people/PeopleBase.vue'
import PeopleHome from '../views/people/PeopleHome.vue'

import PeopleAlbums from '../views/people/albums/PeopleAlbums.vue'
import PeopleAlbumsBase from '../views/people/albums/PeopleAlbumsBase.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //people
  {
    path: '/people', name: 'People', component: People
  },
  {
    path: '/people/:peopleID/', component: PeopleBase,
    children: [
      {
        path: '', component: PeopleHome
      },
      {
        path: 'albums', component: PeopleAlbums
      },
      {
        path: 'albums/:albumID/', component: PeopleAlbumsBase,
        children: [
          {
            path: '', component: () => import(/* webpackChunkName: "people-album-home" */ '../views/people/albums/PeopleAlbumsHome.vue')
          },
          {
            path: ':photoID', component: () => import(/* webpackChunkName: "people-album-photo" */ '../views/people/albums/PeopleAlbumsPhoto.vue')
          },
        ]
      },
    ]
  },

  //exhibition
  {
    path: '/exhibition', name: 'Exhibition', component: () => import(/* webpackChunkName: "exhibition" */ '../views/exhibition/Exhibition.vue')
  },
  {
    path: '/exhibition/:exhibitionID/', component: () => import(/* webpackChunkName: "exhibition-child-base" */ '../views/exhibition/ExhibitionChildBase.vue'),
    children: [
      {
        path: '', component: () => import(/* webpackChunkName: "exhibition-child-home" */ '../views/exhibition/ExhibitionChildHome.vue')
      },
      {
        path: ':seasonID', component: () => import(/* webpackChunkName: "exhibition-child-season" */ '../views/exhibition/season/ExhibitionSeasonBase.vue'),
        children: [
          {
            path: '', component: () => import(/* webpackChunkName: "exhibition-child-season-home" */ '../views/exhibition/season/ExhibitionSeasonHome.vue')
          },
          {
            path: ':pageID', component: () => import(/* webpackChunkName: "exhibition-child-season-page" */ '../views/exhibition/season/ExhibitionSeasonPage.vue'),
          },
        ]
      },
    ]
  },

  //workshop
  {
    path: '/workshop', name: 'Workshop', component: () => import(/* webpackChunkName: "workshop" */ '../views/workshop/Workshop.vue')
  },
  {
    path: '/workshop/:workshopID/', component: () => import(/* webpackChunkName: "workshop-child-base" */ '../views/workshop/WorkshopChildBase.vue'),
    children: [
      {
        path: '', component: () => import(/* webpackChunkName: "workshop-child-home" */ '../views/workshop/WorkshopChildHome.vue')
      },
      {
        path: ':seasonID', component: () => import(/* webpackChunkName: "workshop-child-season" */ '../views/workshop/season/WorkshopSeasonBase.vue'),
        children: [
          {
            path: '', component: () => import(/* webpackChunkName: "workshop-child-season-home" */ '../views/workshop/season/WorkshopSeasonHome.vue')
          },
          {
            path: ':pageID', component: () => import(/* webpackChunkName: "workshop-child-season-page" */ '../views/workshop/season/WorkshopSeasonPage.vue'),
          },
        ]
      },
    ]
  },

  //committee
  {
    path: '/committee', name: 'Committee', component: () => import(/* webpackChunkName: "committee" */ '../views/committee/Committee.vue')
  },
  {
    path: '/committee/:committeeID/', component: () => import(/* webpackChunkName: "committee-committeeID" */ '../views/committee/CommitteeInstance.vue'),
  },

  //404
  {
    path: '*',
    redirect: '/',
  },
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch("validateRouteParams", to.params)
    .then(response => {
      if(response){
        next();
      } else {
        next("/");
      }
    })
})

export default router
