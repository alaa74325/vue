<template>
    <div class="header-post">
        <div class="box">
            <n-link to=""><img src="../../../assets/images/user2.jpg"></n-link>
            <n-link to=""><p>alaa<i class="uil uil-angle-double-right"></i>GroupName<br><span class="time">3 days ago</span></p></n-link>
        </div>
        <n-link to=""><i class="uil uil-ellipsis-h icon"></i></n-link>
    </div>
</template>
<style scoped lang="scss">
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
a{
    text-decoration: none !important;

}
.header-post{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 15px auto;
    .box{
        display: flex;
        p{
            color: $h3Color ;
            font-size: 15px;
            margin-left: 12px;
            font-weight: 600;
            margin-bottom: 13px;
            i{
                font-size: 15px !important;
                font-weight: 600;
            }
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