const store = new Vuex.Store({
    strict: true,
    state: {
        isNavOn: false,
    },
    mutations: {
        setNav (state, navFlag) {
            state.isNavOn = navFlag;
        }
    },
    getters: {
        getNavFlag: state => {
          return state.isNavOn;
        }
    }
});

export default store;