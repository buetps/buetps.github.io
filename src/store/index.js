import Vue from 'vue'
import Vuex from 'vuex'

import exhibition from "../data/exhibition"
import workshop from "../data/workshop"
import people from "../data/people"
import committee from "../data/committee"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    exhibition: undefined,
    exhibition_season: undefined,
    exhibition_page: undefined,

    workshop: undefined,
    workshop_season: undefined,
    workshop_page: undefined,

    people: undefined,
    album: undefined,
    photo: undefined,

    committee: undefined,
  },
  mutations: {
    setExhibition(state, exhibition){
      state.exhibition = exhibition;
      if(!exhibition){
        state.exhibition_season = undefined;
        state.exhibition_page = undefined;
      }
    },
    setExhibitionSeason(state, exhibition_season){
      state.exhibition_season = exhibition_season;
      if(!exhibition_season){
        state.exhibition_page = undefined;
      }
    },
    setExhibitionPage(state, exhibition_page){
      state.exhibition_page = exhibition_page;
    },
    setWorkshop(state, workshop){
      state.workshop = workshop;
      if(!workshop){
        state.workshop_season = undefined;
        state.workshop_page = undefined;
      }
    },
    setWorkshopSeason(state, workshop_season){
      state.workshop_season = workshop_season;
      if(!workshop_season){
        state.workshop_page = undefined;
      }
    },
    setWorkshopPage(state, workshop_page){
      state.workshop_page = workshop_page;
    },
    setPeople(state, people){
      state.people = people;
      if(!people){
        state.album = undefined;
        state.photo = undefined;
      }
    },
    setAlbum(state, album){
      state.album = album;
      if(!album){
        state.photo = undefined;
      }
    },
    setPhoto(state, photo){
      state.photo = photo;
    },
    setCommittee(state, committee){
      state.committee = committee;
    },
    undefineAll(state){
      state.exhibition = undefined;
      state.exhibition_season = undefined;
      state.exhibition_page = undefined;

      state.workshop = undefined;
      state.workshop_season = undefined;
      state.workshop_page = undefined;

      state.people = undefined;
      state.album = undefined;
      state.photo = undefined;

      state.committee = undefined;
    },
  },
  actions: {
    validateRouteParams({commit}, params){
      var flag = true;
      //validate exhibition
      if(params.exhibitionID){
        var exhibitionInstance = exhibition.find(function(item){return item.id == params.exhibitionID});
        if(exhibitionInstance){
          commit("setExhibition", exhibitionInstance);
          if(params.seasonID){
            var seasonInstance = exhibitionInstance.seasons.find(function(item){return item.id == params.seasonID});
            if(seasonInstance){
              commit("setExhibitionSeason", seasonInstance);
              if(params.pageID){
                var pageInstance = seasonInstance.pages.find(function(item){return item.id == params.pageID});
                if(pageInstance){
                  commit("setExhibitionPage", pageInstance);
                } else {
                  flag = false;
                }
              } else {
                commit("setExhibitionPage", undefined);
              }
            } else{
              flag = false;
            }
          } else {
            commit("setExhibitionSeason", undefined);
          }
        } else {
          flag = false;
        }
      } else {
        commit("setExhibition", undefined);
      }

      //validate workshop
      if(params.workshopID){
        var workshopInstance = workshop.find(function(item){return item.id == params.workshopID});
        if(workshopInstance){
          commit("setWorkshop", workshopInstance);
          if(params.seasonID){
            var seasonInstance = workshopInstance.seasons.find(function(item){return item.id == params.seasonID});
            if(seasonInstance){
              commit("setWorkshopSeason", seasonInstance);
              if(params.pageID){
                var pageInstance = seasonInstance.pages.find(function(item){return item.id == params.pageID});
                if(pageInstance){
                  commit("setWorkshopPage", pageInstance);
                } else {
                  flag = false;
                }
              } else {
                commit("setWorkshopPage", undefined);
              }
            } else{
              flag = false;
            }
          } else {
            commit("setWorkshopSeason", undefined);
          }
        } else {
          flag = false;
        }
      } else {
        commit("setWorkshop", undefined);
      }

      //validate people
      if(params.peopleID){
        var peopleInstance = people.find(function(item){return item.id == params.peopleID});
        if(peopleInstance){
          commit("setPeople", peopleInstance);
          if(params.albumID){
            var albumInstance = peopleInstance.albums.find(function(item){return item.id == params.albumID});
            if(albumInstance){
              commit("setAlbum", albumInstance);
              if(params.photoID){
                var photoInstance = albumInstance.photos.find(function(item){return item.id == params.photoID});
                if(photoInstance){
                  commit("setPhoto", photoInstance);
                } else {
                  flag = false;
                }
              } else {
                commit("setPhoto", undefined);
              }
            } else{
              flag = false;
            }
          } else {
            commit("setAlbum", undefined);
          }
        } else {
          flag = false;
        }
      } else {
        commit("setPeople", undefined);
      }

      //validate committee
      if(params.committeeID){
        var committeeInstance = committee.find(function(item){return item.id == params.committeeID});
        if(committeeInstance){
          commit("setCommittee", committeeInstance);
        } else {
          flag = false;
        }
      } else {
        commit("setCommittee", undefined);
      }

      if(!flag){
        commit("undefineAll");
      }
      return flag;
    }
  },
  modules: {
  }
})
