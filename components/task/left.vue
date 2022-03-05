<template>
    <div class="left-content">
        <div class="head-content">
            <div class="container-m">
                <button>
                    Create new task 
                    <i class="uil uil-plus-circle"></i>
                </button>
                <n-link to="">Overview</n-link>
            </div>
        </div>
        <div class="groups">
            <TaskGroup></TaskGroup>
            <TaskGroup></TaskGroup>
        </div>
    </div>
</template>
<style scoped lang="scss">
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
.container-m{
    display: block !important;
}
.left-content{
    background:#fff;
    padding: 10px 0;
    border-radius: 13px;
}
.head-content{
    button{
        color: $h3Color;
        font-size: 17px;
        font-weight: 600;
        background: #f3f5f7;
        border-radius: 12px;
        padding: 8px 10px;
        display: block;
        i{
            color:$fancyColor;
            font-size: 21px;
        }
    }
    a{
        text-decoration: none;
        background: $fancyColor;
        color: #fff;
        border-radius: 12px;
        padding: 8px 0;
        display: block;
        margin: 10px auto;
        text-align: center;
    }
}
</style>