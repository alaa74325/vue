<template>
    <div class="login-page">
        <div class="slider-content">
            <slider-component></slider-component>
        </div>
        <div class="form-content">
            <text-login-co></text-login-co>
            <login-form-component></login-form-component>
        </div> 
    </div>
</template>

<style scoped lang="scss">

</style>
<script>
import SliderComponent from '~/components/slider-component.vue';
import "../assets/styles/main.scss";
import "../assets/styles/sign-in.scss"
import TextLoginCo from "../components/text-login-co.vue";
export default{
    components: { TextLoginCo, SliderComponent }
}



</script>