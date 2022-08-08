const getters={
    counter(state){
        return state.counter;
    },
    reminder(state){
        return state.reminder;
    },
    name(state){
        return state.register.name;
    },
    nameerror(state){
        return state.errors.name;
    },
    emailerror(state){
        return state.errors.email;
    },
    passworderror(state){
        return state.errors.password;
    },
    email(state){
        return state.register.email;
    }, 
    password(state){
        return state.register.password;
    },
    emailLogin(state){
        return state.login.email;
    }, 
    passwordLogin(state){
        return state.login.password;
    },
    gettasks: (state) => state.tasks
}
export default getters;