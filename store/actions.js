import axios from 'axios' ;
const actions={
    async registerf({getters,commit,state}){
        try{
            let res= await axios.post('https://gp.maleskndrany.com/api/student/register',{
                name:this.getters.name,
                email:this.getters.email,
                password:this.getters.password,
            })
            commit('updateNameError',res.data.errors.name);
            commit('updateEmailError',res.data.errors.email);
            commit('updatePasswordError',res.data.errors.password);
            console.log(res.token);
        }
        catch(err){
        }
    },
    async loginf({getters}){
        try{
            let r=this.$auth.loginWith('local',{
                    email:this.getters.emailLogin,
                    password:this.getters.passwordLogin
            });
            console.log(r)
            }
            catch(e){

            }   
        }

}
export default actions;