<template>
    <div class="right-content">
        <div class="container-m">
            <div class="head-content div-flex-sp">
                    
            </div>
            <div class="last-progress">
                <div class="container">
                    <h3>Last Progress</h3>
                    <p><span>14</span> Sept - <span>20</span> Sept 2020</p>
                </div>
                <TaskPro></TaskPro>
                <TaskPro></TaskPro>
                <TaskPro></TaskPro>
                <TaskPro></TaskPro>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
$bodyColor:#f3f5f7;

.container-m{
    display: block !important;
    width: 91% !important;
}
.div-flex-sp{
    display: flex;
    justify-content: space-between;
}
.right-content{
    height: 700px;
    border-radius: 12px;
    background: #fff;
}
.last-progress{
    h3{
        font-size: 19px;
        font-weight: 600;
        margin: 15px 0 0;
    }
    p{
        font-size: 14px;
        margin:0 0 15px;
        color: $spanColor;
        
        font-weight: 600;
        span{
            color:$fancyColor;
            
        }
    }
}
</style>