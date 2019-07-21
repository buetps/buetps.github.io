const store = new Vuex.Store({
    strict: true,
    state: {
        isNavOn: false,
    },
    mutations: {
        toggleNav (state) {
            state.isNavOn = !state.isNavOn;
        }
    },
    getters: {
        getNavFlag: state => {
          return state.isNavOn;
        }
    }
});

export default store;