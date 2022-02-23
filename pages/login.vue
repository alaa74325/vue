<template>
    <div class="login-page">
        <div class="slider-content">
            <LoginSliderComponent></LoginSliderComponent> 
        </div>
        <div class="form-content">
            <LoginTextLoginCo></LoginTextLoginCo>
            <LoginFormComponent></LoginFormComponent>
        </div> 
    </div>
</template>
<script>
export default {
    layout: "empty"
};
</script>

<style scoped lang="scss">
.login-page{
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    >*{
        width:50%;
    }
} 
.form-content{
        #inspire{
            margin: 0px auto;
            .v-text-field--outlined fieldset{
                top:0;
                
            }
        }
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
</style>