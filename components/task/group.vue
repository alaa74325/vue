<template>
    <div class="group">
        <div class="container-m">
            <button class="group-box" @click="show = !show">
                <i class="uil uil-angle-down" v-if="!show"></i>
                <i class="uil uil-angle-up" v-if="show"></i>
            Course</button>
            <p v-if="show ">Sub Group</p>
            <p v-if="show">Sub Group</p>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            show:true,
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
.container-m{
    display: block !important;
}
.div-flex-sp{
    display: flex;
    justify-content: space-between;
}
.group{
    width: 100%;
    button{
        color: $h3Color;
        font-size: 18px;
        i{
            color: $h3Color;
            font-size: 23px;
            margin-right: 3px;
            transition: 3s;
        }
    }
    p{
        color: #9ba3b5;
        font-size: 15px;
        margin: 5px 0 0 25px;
        transition: 3s;
    }
}
</style>