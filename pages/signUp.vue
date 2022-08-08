<template>
    <div class="sign-up">
        <div class="slider-content">
            <LoginSliderComponent></LoginSliderComponent>
        </div>
        <div class="form-content">
            <LoginTextLoginCo></LoginTextLoginCo>
            <form method="post" @submit.prevent="registerf">
                <v-app id="inspire">
                        <v-text-field
                                outlined
                                label="Full Name"
                                append-icon="mdi-account"
                                name="name"
                                v-model="name"
                                required
                        ></v-text-field>
                        <p class="errors">{{nameerror}}</p>
                <v-text-field
                                outlined
                                label="Email"
                                append-icon="mdi-at"
                                name="email" 
                                v-model="email"
                                required
                                ></v-text-field>
                                <p class="errors">{{emailerror}}</p>
                <v-text-field
                                    outlined
                                    label="Password"
                                    append-icon="mdi-lock"
                                    @click="showpassword= !showpassword"
                                    name="password"
                                    
                                    v-model="password"
                                    type="password"
                ></v-text-field>
                <p class="errors">{{passworderror}}</p>
                <div class="check-field">
                            <input type="checkbox" name="remember-me" id="remember-me">
                            <label for="remember-me">Remember Me</label>
                            <span>Recovery Password</span>
                </div>
                <LoginBtn>Sign Up</LoginBtn>
                <div class="google-signin btn text-center">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    <n-link to="">Sign in with Google</n-link>
                </div> 
                <div class="sign-up-field"> 
                    <p>Already have an account?</p>
                    <n-link to="/login">Login</n-link>
                </div>                   
                </v-app>
            </form>
        </div>
        </div>    
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    
    data(){
        return{
        } 
    },
    layout: "empty",
    computed:{
        ...mapGetters(['name','email','password','nameerror','passworderror','emailerror']),
        name:{
            get(){
                return this.$store.getters.name
            },
            set(value){
                this.$store.commit('updateName',value)
            }
        },
        email:{
            get(){
                return this.$store.getters.email
            },
            set(value){
                this.$store.commit('updateEmail',value)
            }
        },
        password:{
            get(){
                return this.$store.getters.password
            },
            set(value){
                this.$store.commit('updatePassword',value)
            }
        },
    },
    methods: {
        ...mapActions(['registerf']),
    }
}
</script>
<style  lang="scss"  >
$background-slider:#2a5dc4;
$btn-background:#6E95E9;
$font-collor:#999;
$border-color:#d9d9d9;
$font-family: 'Montserrat', sans-serif;
.errors{
    color:red;
    margin: 0;
    font-size: 12px;
    background: none !important;
}
@media (max-width:1000px) {
    .login-page,.sign-up{
        justify-content: flex-end;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        height: 100% !important;
        >div{
            width: 100% !important;
            height: 100% !important;
        }
        .slider-content{
            overflow: hidden;
            .d-md-block {
                display: block!important;
            }
        }
    }
}
.v-application--wrap {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100% !important;
    max-width: 100%;
    position: relative;
    margin-bottom: 60px;
}
.sign-up{
    display: flex;
    width: 100%;
    overflow: hidden;
    >*{
        width:50%;
    } 
    
    .form-content{
        height: 100vh;
            >*{
                width: 60%;
                margin:0 auto;
            }
            #inspire{
                margin: 0px auto;
                .v-text-field--outlined fieldset{
                    top:0;
                    
                }
            }
    }
    /* start Slider Style*/
    .slider-content{
            background: $background-slider;
            overflow: hidden;
        }
}
/*  login with your google account */
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
/* */
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
/*  */
.sign-up-field{
    display: flex;
    justify-content: center;
    margin: 50px auto 0;
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
/* Start editing vuetify elements */
.v-btn--block {
    flex: 0 0 auto;
}
.v-text-field__details {
    display: none !important;
}
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
    opacity: 1;
}
.v-btn:not(.v-btn--round).v-size--default {
    padding: 21px 7px;
    color: #fff;
    background: $background-slider;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none !important;
}
.v-text-field--outlined fieldset{
    top:0px;
                
}
.v-application--is-ltr, .v-text-field .v-label {
    background: #fff;
    padding: 0 1px;
}
.v-application--is-ltr, .v-text-field .v-label {
    background: #fff;
    padding: 0 1px;
}
.v-input {
    
    flex: 0 1 auto;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 46px;
}
.v-input__slot {
    margin-top: 12px;
    margin-bottom: 5px;
}
.v-application--is-ltr, .v-text-field .v-label {
    background: #fff;
    padding: 0 1px;

}
.v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
}
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot, .v-text-field.v-text-field--enclosed .v-text-field__details {
    margin-top: 10px;
}
</style>