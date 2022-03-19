<template>
    <div class="user-page">
        <div class="container-m">
            <div class="left-side col-3-m">
                <UserLeftSide></UserLeftSide>
            </div>
            <div class="post-content col-6-m">
                <UserPostsArea></UserPostsArea>
            </div>
            <div class="right-side col-3-m" >
                <UserRightSide></UserRightSide>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
    }
}
</script>
<style scoped lang="scss">
$iconColor:#94949f;
$bodyColor:#f3f5f7;
$activeColor:#0061ff;
.container-m{
    width: 90% !important;
}
.activity-message{
    display: none;
}
/* general classes*/
.user-page{
    background: $bodyColor;
    padding-top: 60px;
    >div.container-m{
        >div{
            margin-top: 20px;
            height: 100%;
        }
    }
}
@media (min-width:1025px) {
    /* Fixed sides */
    .right-side,.left-side{
        position: fixed;
        width: 21.6%;
    }
    .right-side{
        right:5%;
    }
    .left-side{
        position: fixed;
    }
    .post-content{
        margin-left:26% ;
        position: relative;
    }
}
@media (max-width: 1024px) {
    .col-6-m{
        width: 65%;
    }
    .col-3-m{
        width: 32%;
    }
    .container-m{
        width: 93%;
    }
    .right-side{
        display: none;
    }
    /*.activity-message{
        display: flex;
        width: 100%;
        padding: 5px  5%;
        list-style: none;
        justify-content: space-between;
        li{
            display: inline-block;
            width: 35px;
            height: 35px;
            background: #fff;
            text-align: center;
            border-radius: 50%;
            line-height: 35px;
            i{
                font-size: 20px;
                color:$iconColor;
            }
        }
    }*/
}
@media (max-width:900px) {
    .col-6-m{
        width: 100%;
    }
    .col-3-m{
        display: none;
    }
}

</style>