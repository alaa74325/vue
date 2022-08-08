<template>
    <div class="btn">
        <button type="submit">
            <slot>
                login
            </slot>
        </button>
    </div>

</template>
<style scoped lang="scss">
$background-slider:#2a5dc4;
$btn-background:#6E95E9;
$font-collor:#999;
$border-color:#d9d9d9;
$font-family: 'Montserrat', sans-serif;
.btn{
    width:100%;
    background: #2a5dc4;
    position: relative;
    margin-bottom: 6px;
    line-height:35px;
    button{
        width: 100%;
        outline: none;
        border:none;
        color:#fff;

    }
    .load{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        z-index: 1;
        background: $background-slider;
        span{
            border: 2px solid #999;
            border-top-color: #999;
            border-right-color: #c2c1c1;
            border-bottom-color: #d9d9d9;
            border-left-color: #fff;
            animation: spiner-data-v-478f490b 1s 3 ease-in-out;
            transition: 0.4s ;
            width: 20px;
            height: 20px;
            display: block;
            margin: 10px auto;
            border-radius: 50%;
        }

    }
}

</style>
<script>
export default{
    data () {
    return {
    }
    },
    methods:{
    }
}
</script>
