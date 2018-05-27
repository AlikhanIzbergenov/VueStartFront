import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)



//start import all modules
import settings from './settings'
import socket from './socket'


//end import all modules


export const store = new Vuex.Store({
    namespaced: true,
    modules: {
        settings,
        socket

    },
    state: {
        drawer: false
    },
    getters: {
        getDrawer(state) {
            return state.drawer;
        },

    },
    mutations: {
        changeDrawer(state) {
            state.drawer = !state.drawer;
        }

    }
});
