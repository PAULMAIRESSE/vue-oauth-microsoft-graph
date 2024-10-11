// src/lib/store.js
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })]
});