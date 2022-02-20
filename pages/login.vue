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
</style>