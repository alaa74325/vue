<template>
    <div class="right-content">
        <div class="container-m">
            <div class="head-content div-flex-sp">
                    <h3>Messages</h3>
                    <nuxt-link to=""><i class="uil uil-edit"></i></nuxt-link>
            </div> 
            <div class='search-input'>
                <input type="text" placeholder="Search">
                <i class="uil uil-search"></i>
                <i class="uil uil-filter"></i>
            </div>
            <div class="priority div-flex-sp">
                <n-link to="" class="active-m">Primary</n-link>
                <n-link to="">General</n-link>
                <n-link to="" class="funcy-active">Requests(2)</n-link>
            </div>
            <div class="calendar">
                <div class="head-calendar div-flex-sp">
                    <h4>May</h4>
                    <n-link to=""><i class="uil uil-angle-left"></i><i class="uil uil-angle-right"></i></n-link>
                </div>
                <div class="box-calendar div-flex-sp">
                    <n-link to=""><p class="active">Sat<br><span>1</span></p></n-link>
                    <n-link to=""><p>Sun<br><span>2</span><br><span class="p"></span><span class="p y"></span></p></n-link>
                    <n-link to=""><p>Mon<br><span>3</span></p></n-link>
                    <n-link to=""><p>Tue<br><span>4</span><br><span class="p"></span><span class="p b"></span></p></n-link>
                    <n-link to=""><p>Wed<br><span>5</span><br><span class="p"></span><span class="p y"></span><span class="p b"></span></p></n-link>
                    <n-link to=""><p>Thu<br><span>6</span></p></n-link>
                    <n-link to=""><p>Fri<br><span>7</span></p></n-link>
                </div>
            </div>
            <div class="schedule">
                <div class="head-schedule div-flex-sp">
                    <h4>Upcoming schedule</h4>
                    <n-link to=""><i class="uil uil-question"></i></n-link>
                </div>
                <div class="box-schedule div-flex-sp">
                    <p><span>Tue</span><br>10</p>
                    <p class="p-right">Google jop interview<br><span>09:00-10:00 Zoom Meeting</span></p>
                </div>
                <div class="box-schedule div-flex-sp">
                    <p><span>Thu</span><br>12</p>
                    <p class="p-right color-blue">Google jop interview<br><span>09:00-10:00 Zoom Meeting</span></p>
                </div>
                <div class="box-schedule div-flex-sp">
                    <p><span>Fri</span><br>13</p>
                    <p class="p-right color-yellow">Google jop interview<br><span>09:00-10:00 Zoom Meeting</span></p>
                </div>
                <div class="view-more">
                    <n-link to="">View all schedule <i class="uil uil-angle-down"></i></n-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    
}
</script>

<style scoped lang="scss">
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
$bodyColor:#f3f5f7;
$redColor:#fc6a6a;
$blueColor:#45bbfe;
$yellowColor:#fed645;
$activeColor:#0061ff;

.container-m{
    display: block;
}
.div-flex-sp{
    display: flex;
    justify-content: space-between;
}
.priority{
    border-bottom: 2px solid $bodyColor;
    a{
        font-size: 16px;
        color:$spanColor;
        padding: 10px 0;
        position: relative;
        bottom: -1.5px;
    }
}
.active-m{
    color:$h3Color !important;
    border-bottom: 2.5px solid $h3Color;
    border-radius: 1.3px;
    font-weight: 500;
}
.funcy-active{
    color:$fancyColor !important;
}
.right-content{
    background: #fff;
    border-radius: 15px;
    width: 100%;
    
}
.search-input{
    width: 100%;
    position: relative;
    font-weight: 400;
    margin: 18px auto;
    input{
        width: 100%;
        background: #f3f5f7;
        border-radius: 20px;
        line-height: 35px !important;
        font-size: 16px;
        color:#5a5f6a;
        outline: none;
        padding-left: 16%;
    }
    i{
            position: absolute;
            top: 10%;
            right: 15px;
            font-size: 18px;
            font-weight: 400;
    }
    i.uil-search{
        top: 10%;
        left: 15px !important;
    }
}
a{
    text-decoration: none;
    color:$h3Color;
    font-size: 14px;
}
.head-content{
    margin: 10px auto;
    color:$h3Color !important;
    h3{
        font-size: 17px;
    }
    i{
        font-size: 18px;
    }
}
.head-schedule{
    margin: 13px auto;
    h4{
        font-size: 16px;
        font-weight: 600 !important;
        color: $h3Color;
    }
    a{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: $bodyColor;
        color:$h3Color;
        text-align: center;
    }
}
.box-schedule{
    P{
        font-size: 14px;
        font-weight: 700;
        color:$h3Color; 
        padding: 10px 5px;
        line-height: 24px;
        span{
            color: $spanColor;
            font-weight: 400;
        }
    }
    p.p-right{
        border-radius: 10px;
        background: $bodyColor;
        position: relative;
        padding-left: 25px;
        padding-right: 20px;
    }
    p.p-right::before{
        content: "";
        width: 3px;
        height: 50%;
        background:$redColor;
        position: absolute;
        top: 25%;
        left: 4%;
        border-radius: 1.2%;
    }
    p.color-blue::before{
        background:$blueColor !important;
    }
    p.color-yellow::before{
        background:$yellowColor !important;
    }
}
.view-more{
    width: 60%;
    line-height: 24px;
    background: #f3f5f7;
    border-radius: 10px;
    margin: 0 auto 11px;
    text-align: center;
    padding: 5px;
    a{
        color:$activeColor;
        font-weight: 600;
    }
    i{
        font-size: 23px !important;
        position: relative;
        bottom: -4px;
    }
}
.head-calendar{
    margin-top: 13px;
    color:$h3Color !important;
    h4{
        font-size: 17px;
        
    }
    i{
        font-size: 22px;
    }
}
.box-calendar{
    margin-top: 13px;
    border-bottom: 2px solid $bodyColor;
    p{
        font-size: 12px;
        font-weight: 600;
        color: $spanColor;
        text-align: center;
        line-height: 24px;
        position: relative;
        margin-bottom: 0 !important;
    }
    span{
        font-size: 15px;
        color:$h3Color
    }
    span.p{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #fc6a6a;
        position: relative;
        bottom: 14px;
        display: inline-block;
        margin-left: -1.5px;
    }
    span.p.y{
        background:$yellowColor;
    }
    span.p.b{
        background:$blueColor;
    }
    p.active{
        border-radius: 7px;
        width: 36px;
        background:$activeColor;
        color:#f3f5f7;
        span{
            color:#fff;
        }    
    }
}
</style>