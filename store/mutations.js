import getters from "./getters"

const mutations= {
    updateName(getters,n){
        getters.register.name=n
    },
    updateEmail(getters,e){
        getters.register.email=e
    },
    updatePassword(getters,p){
        getters.register.password=p
    },
    updateEmailLogin(getters,e){
        getters.login.email=e
    },
    updatePasswordLogin(getters,p){
        getters.login.password=p
    },
    ADD_USER(state,user){
        state.register.push(user)
    },
    updateNameError(getters,error){
        getters.errors.name=error
    },
    updateEmailError(getters,error){
        getters.errors.email=error
    },
    updatePasswordError(getters,error){
        getters.errors.password=error
    },
}
export default mutations;