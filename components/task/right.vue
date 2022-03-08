<template>
    <div class="right-content">
        <div class="container-m">
            <div class="head-content div-flex-sp">
                <div class="search-box">
                    <input type="text" placeholder="Search about something">
                    <i class="uil uil-search"></i>
                </div>
                <button><i class="uil uil-bell"></i></button>
            </div>
            <div class="calendar-box">
                <TaskCalendar />
            </div>
            <div class="last-progress">
                <div class="container-m">
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
.calendar-box{
    margin-top: 10px;
}
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
    .head-content{
        margin-top: 10px;
        button{
            outline: 0;
            background: $bodyColor;
            border-radius: 10px;
            padding: 0 8px;
            line-height: 15px;
            i{
                font-size: 24px;
                color:$hColor;
                display: block;
                margin: auto;
            }
        }
    }
    .search-box{
        background: $bodyColor;
        width: 70%;
        border-radius: 10px;
        line-height: 40px;
        position: relative;
        padding: 3px 0;
        input{
            width: 90%;
            height: 100%;
            padding: 0 10px;
            outline: none;
            color: $pColor;
        }
        i{
            position: absolute;
            right: 10px;
            top:3px;
            font-size: 19px;
            color:$fancyColor;
        }
    }
}
.last-progress{
    h3{
        font-size: 19px;
        font-weight: 600;
        margin: -5px 0 0;
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