<template>
    <div class="sign-up">
        <div class="slider-content">
            <LoginSliderComponent></LoginSliderComponent>
        </div>
        <div class="form-content">
            <LoginTextLoginCo></LoginTextLoginCo>
            <form>
                <v-app id="inspire">
                        <v-text-field
                                outlined
                                label="Full Name"
                                append-icon="mdi-account"
                        ></v-text-field>
                <LoginEmailCo></LoginEmailCo>
                <LoginBtn></LoginBtn>
                <div class="google-signin btn text-center">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    <n-link to="">Sign in with Google</n-link>
                </div>                    
                </v-app>
            </form>
        </div>
        </div>    
</template>
<script>
</script>
<style  lang="scss"  >
$background-slider:#2a5dc4;
$btn-background:#6E95E9;
$font-collor:#999;
$border-color:#d9d9d9;
$font-family: 'Montserrat', sans-serif;
.sign-up{
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    >*{
        width:50%;
    } 
    .google-signin{
        margin-top: 15px;
        border:2px solid $border-color;
        position: relative;
        line-height: 35px;
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
    .form-content{
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