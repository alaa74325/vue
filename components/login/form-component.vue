<template>
    <div class="login-component">
        <v-app id="inspire"> 
            <form>
                <LoginEmailCo></LoginEmailCo>
                <LoginBtn></LoginBtn>
                <div class="google-signin btn text-center">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    <nuxt-link to="">Sign in with Google</nuxt-link>
                </div>
                <div class="sign-up-field"> 
                    <p>Don't have an account yet?</p>
                    <NLink to="/sign-up">Sign Up</NLink>
                </div>
            </form>
        </v-app>
    </div>
</template>

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
/* Start Checkbox styling*/
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
/* Start SignIn with your google account */
.google-signin{
    margin-top: 23px;
    border:2px solid $border-color;
    position: relative;
    img{
        width: 23px;
        height: 23px;
        position: absolute;
        left: 29%;
        top: 22%;
    }
    nuxt-link{
        background: $border-color;
        font-size: 17px;
        text-decoration: none;
        color: $font-collor;
        margin-left:27px;
        background: transparent;
    }
} 
/* Start editing vuetify elements */

.form-content #inspire {
    margin: 0 auto;
    width: 60%;
}



.google-signin{
    margin-top: 23px;
    border:2px solid $border-color;
    position: relative;
    img{
        width: 23px;
        height: 23px;
        position: absolute;
        left: 29%;
        top: 22%;
    }
    a{
        background: $border-color;
        font-size: 17px;
        text-decoration: none;
        color: $font-collor;
        margin-left:27px;
        background: transparent;
    }
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

