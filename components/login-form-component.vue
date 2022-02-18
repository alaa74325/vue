<template>
    <div class="login-component">
        <v-app id="inspire"> 
            <form>
                <login-co></login-co>
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
                <div class="sign-up-field"> 
                    <p>Don't have an account yet?</p>
                    <a href="../sign-up">Sign Up</a>
                </div>
            </form>
        </v-app>
    </div>
</template>
<script>
export default{

}
</script>
<style lang="scss" >
</style>

