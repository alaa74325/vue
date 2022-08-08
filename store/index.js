import Vue from "vue";
import Vuex from "vuex";
import Getters from "./getters";
import Actions from "./actions";
import Mutations from "./mutations";
Vue.use(Vuex);
//import axios from 'axios';

export default () => new Vuex.Store({
    state:()=>({
        register:{
            name:'',
            email:'',
            password:'',
        },
        login:{
            email:'',
            password:''
        },
        errors:{
            name:'',
            email:'',
            password:'',
        }
        
    }),

    getters:Getters,
    mutations:Mutations,
    actions:Actions,
    modules:{
        todos:{
            namespaced:true
        },
        tasks:{
            namespaced:true
        },
    }
});
