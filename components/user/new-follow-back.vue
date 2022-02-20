<template>
    <div class="new-follow-back">
        <div class="mentions">
            <n-link to=""><img src="../../assets/images/user2.jpg"></n-link>
            <n-link to=""><p>alaa<span>Started<br> Following you.</span><span class="time">1m</span></p></n-link>
        </div>
        <n-link to=""><i class="uil uil-user-plus icon"></i></n-link>
    </div>
</template>
<style scoped lang="scss">
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
a i.icon{
    background: #f1ebff;
    color:$fancyColor;
    border-radius: 50%;
    padding: 6px;
    text-align: center;
    width: 35px;
    height: 35px;
    display: block;
}
.new-follow-back{
    width:100%;
    display: block;
    display: flex;
    justify-content: space-between;
    h4{
        color:$h3Color;
        font-size: 14px;
        margin-bottom: 20px;
    }
    a{
        text-decoration: none !important;

    }
        .mentions{
            display: flex;
            p{
                color: $h3Color ;
                font-size: 14px;
                margin-left: 10px;
                font-weight: 600;
                margin-bottom: 13px;
                span{
                    font-size: 13px ;
                    font-weight: 400;
                    color: $hColor ; 
                }
                span.time{
                    color:$spanColor ;
                }
            }
        img{
            width:40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>