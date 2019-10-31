import Vuex from 'vuex';
import Vue from 'vue';
import realStore from "@/stores/real";
Vue.use(Vuex);

const stores = {
    state: {

    },
    modules: {
        realStore
    }
};

const store = new Vuex.Store(stores);

export default store;