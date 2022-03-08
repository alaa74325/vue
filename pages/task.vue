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
    >div.container-m{
        >div{
            margin-top: 20px;
            overflow: hidden;
            height: 100%;
        }
    }
}
@media (max-width:1024px) {
    .col-6-m{
        width: 65%;
    }
    .col-3-m{
        width: 32%;
    }
    .container-m{
        width: 93%;
    }
    .left-side{
        display: none;
    }
}
@media (max-width:900px) {
    .center{
        width: 100%;
    }
    .right-side,.left-side{
        display: none;
    }
}
</style>