const store = new Vuex.Store({
    strict: true,
    state: {
        isNavOn: false,
        generalPageContentType: undefined,
    },
    mutations: {
        setNav (state, navFlag) {
            state.isNavOn = navFlag;
        },
        setGeneralPageContentType (state, type) {
            state.generalPageContentType = type;
        }
    },
    getters: {
        getNavFlag: state => {
          return state.isNavOn;
        },
        generalPageContentType: state => {
            return state.generalPageContentType;
        }
    }
});

export default store;