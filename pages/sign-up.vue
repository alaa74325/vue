<template>
    <div class="sign-up">
        <div class="slider-content">
            <slider-component></slider-component>
        </div>
        <div class="form-content">
            <text-login-co></text-login-co>
            <v-app id="inspire">
                    <v-text-field
                            outlined
                            label="Full Name"
                            append-icon="mdi-account"
                    ></v-text-field>
                    <LoginCo></LoginCo>
                    <div class="check-field">
                        <input type="checkbox" name="remember-me">
                        <label for="remember-me">Remember Me</label>
                        <span>Recovery Password</span>
                    </div>
                    <btn></btn>
                    <div class="google-signin btn text-center">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                        <a href="#">Sign in with Google</a>
                    </div>                    
            </v-app>
        </div>
        </div>    
</template>
<script>
import textLoginCo from '~/components/text-login-co.vue';
import "../assets/styles/sign-in.scss";
import "../assets/js/main";
export default{
  components: { textLoginCo },

}
</script>
<style  lang="scss">

</style>