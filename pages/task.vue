<template>
    <div class="task-page">
        <div class="container-m">
            <div class="left-side">
                <TaskLeft></TaskLeft>
            </div>
            <div class="center">
                <TaskCenter></TaskCenter>
            </div>
            <div class="right-side" >
                <TaskRight></TaskRight>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped lang="scss">
$iconColor:#94949f;
$bodyColor:#f3f5f7;
$activeColor:#0061ff;

.left-side{
    width: 17%;
}
.center{
    width: 52%;
}

.right-side{
    width: 28%;
}
/* general classes*/
.task-page{
    background: $bodyColor;
    padding-top: 60px;
    >div.container-m{
        >div{
            margin-top: 20px;
            overflow: hidden;
            height: 100%;
        }
    }
}
@media (min-width:1025px) {
    /* Fixed sides */
    
}
@media (max-width: 1024px) {
    .center{
        width: 65%;
    }
    .left-side{
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
    .center{
        width: 100%;
    }
    .left-side{
        display: none;
    }
}
</style>