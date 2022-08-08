<template>
    <div class="login-component">
        <v-app id="inspire"> 
            <form @submit.prevent='loginf'>
                <div class="email-co">
                    <v-text-field
                                    outlined
                                    label="Email"
                                    append-icon="mdi-at"
                                    name="email" 
                                    v-model="email"
                                    required
                                    ></v-text-field>
                    <v-text-field
                                        outlined
                                        label="Password"
                                        append-icon="mdi-lock"
                                        name="password" 
                                        v-model="password" 
                                        required
                                        type="password"
                    ></v-text-field>
                    <div class="check-field">
                                <input type="checkbox" name="remember-me" id="remember-me">
                                <label for="remember-me">Remember Me</label>
                                <span>Recovery Password</span>
                    </div> 
                </div>
                <LoginBtn></LoginBtn>
                <div class="google-signin btn text-center">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    <n-link to="">Login with Google</n-link>
                </div>
                <div class="sign-up-field"> 
                    <p>Don't have an account yet?</p>
                    <n-link to="/signUp">Sign Up</n-link>
                </div>
            </form>
        </v-app>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    data() {
    return {
        }
    },
    computed:{
    ...mapGetters(['emailLogin','passwordLogin','passworderror','emailerror']),
            email:{
                get(){
                    return this.$store.getters.emailLogin
                },
                set(value){
                    this.$store.commit('updateEmailLogin',value)
                }
            },
            password:{
                get(){
                    return this.$store.getters.passwordLogin
                },
                set(value){
                    this.$store.commit('updatePasswordLogin',value)
                }
            },
        },
    methods: {
        ...mapActions(['loginf']),
    }
}
</script>
<style lang="scss" scoped>
$background-slider:#2a5dc4;
$btn-background:#6E95E9;
$font-collor:#999;
$border-color:#d9d9d9;
$font-family: 'Montserrat', sans-serif;

.login-component,div{
    form{
        width:100%;
        margin: 10px auto;
        >div{
            width:100%;
            margin-top: 10px;
            position: relative;
            padding: 5px 0;
        }     
        .submit-field{
            background:$background-slider;
        }
        
        .sign-up-field{
            display: flex;
            justify-content: center;
            margin: 70px auto 0;
            text-align: center;
            p{
                color:$font-collor;
                margin-right: 10px;
            }
            a{
                text-decoration: none;
                color:$background-slider;
                font-weight: 600;
            }
        }  
    
    }
}

/* Start SignIn with your google account */
.google-signin{
    margin-top: 15px;
    border:2px solid $border-color;
    margin-top: 15px;
    line-height: 35px;
    display: flex;
    justify-content: center;
    img{
        width: 23px;
        height: 23px;
        margin-top: 5px;
    }
    a{
        background: $border-color;
        font-size: 17px;
        text-decoration: none;
        color: $font-collor;
        margin-left:13px;
        background: transparent;
    }
}
/* Start editing vuetify elements */

.form-content #inspire {
    margin: 0 auto;
    width: 60%;
}


/* Start checkbox styling */
.check-field {
    margin-bottom: 40px !important;
    text-align: start;
    position: relative;
    input{
        width:16px;
        height: 15px;
        color:$border-color;
    }
    label{
        color:#999;
        font-size: 15px;
    }
    span{
        color:$background-slider;
        font-size: 14px;
        cursor: pointer;
        position: absolute;
        top: 8px;
        right: 0;
    }
} 

.v-btn--block {
    flex: 0 0 auto;
}

</style>

