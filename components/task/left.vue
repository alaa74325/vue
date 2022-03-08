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
            <div class="container-m">
                <button class="categ"><i class="uil uil-calender"></i>Today</button>
                <input type="checkbox" id="categ">
                <label for="categ">Uncategorized</label>
            </div>
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
$bodyColor:#f3f5f7;
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
.categ{
    display: block;
    background: $bodyColor;
    padding: 6px 5px;
    width: 100%;
    border-radius: 10px;
    text-align: left;
    color: $fancyColor;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 10px;
    i{
        font-size: 17px;
        margin-right: 5px;
    }
}
input#categ{
    color: $spanColor;
    margin-left: 5px;

}
label{
    color: $spanColor;
    font-size: 15px;
    font-weight: 500;
}

</style>