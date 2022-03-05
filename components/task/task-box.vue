<template>
    <div class="task-box">
        <div class="container-m div-flex-sp">
            <div class="div-flex-sp">
                <i class="uil uil-play-circle start-w"></i>
                <p>Start from<br><i class="uil uil-clock"></i> <span>9:00am</span></p>
            </div>
            <div>
                <p>Website Redesign<br><i class="uil uil-paperclip"></i><n-link to="">www.zoom.com</n-link><i class="uil uil-comment-alt-dots"></i><span>8 comments</span></p>
            </div>
            <div class="progress-t">
                <p>24% complete</p>
                <span></span>
            </div>
            <div>
                <button class="reminder-me"><i class="uil uil-stopwatch"></i>Reminder</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$h3Color:#1b2232;
$pColor:#484e5a;
$hColor:#474748;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
$bodyColor:#f3f5f7;
$blueColor:#45bbfe;
$activeColor:#0061ff;
.container-m{
    width: 91% !important;
}
.div-flex-sp{
    display: flex;
    justify-content: space-between;
}
.task-box{
    width: 100%;
    border-radius: 13px;
    background: #FFF;
    margin: 10px 0;
    a{
        text-decoration: none;
        color:#45bbfe;
        font-size: 13px;
        font-style: none;
        font-weight: 400;
        margin-right: 10px;
    }
    p{
        font-size: 14px;
        color: $h3Color;
        font-weight: 600;
        margin: 0;
        padding: 0;
        span{
            color:$spanColor;
            font-size: 12px;
            font-weight: 500;
        }
        i{
            font-size: 19px;
            color:$spanColor;
            margin-right:4px;
        }
    }
    i.start-w{
        color: #945dff;
        font-size:30px;
        margin-right: 7px;
    }
    .progress-t{
        p{
            color: $spanColor;
            
        }
        span{
                width:50%;
                background: #45bbfe;
                height: 3px;
                border-radius: 1.5px;
                display: block;
                margin: 10px 0px 0;
        }
        
    }
    
}
.reminder-me{
    padding: 2px 5px 5px;
    font-size: 13px;
    color:$fancyColor;
    border-radius: 7px;
    background: $bodyColor;
    font-weight: 600;
    margin-top: 8px;
    i{
        font-size: 18px;
    }
    
}
</style>