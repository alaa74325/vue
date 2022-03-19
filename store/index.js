import Vue from "vue";
import Vuex from "vuex";
import Getters from "./getters";
import Actions from "./actions";
import Mutations from "./mutations";
Vue.use(Vuex);
export default () => new Vuex.Store({
    state:()=>({
        counter:0,
        
    }),
    getters:Getters,
    mutations:Mutations,
    actions:Actions,
    modules:{}
});
