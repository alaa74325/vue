<template>
    <div class="new-photo">
        <div class="mentions">
            <n-link to=""><img src="../../assets/images/user3.jpg"></n-link>
            <n-link to=""><p>dr.aliali<span> liked your<br> photo.</span><span class="time">1m</span></p></n-link>
        </div>
        <n-link to=""><img src="../../assets/images/post-img.jpg" class="post-img"></n-link>
    </div>
</template>
<style scoped lang="scss">
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
img{
    width:40px;
    height: 40px;
    border-radius: 50%;
}
img.post-img{
    border-radius: 7px;
    border:3px solid #f3f5f7;
    text-align: end;
}
a{
    text-decoration: none;

}
.new-photo{
    display: flex;
    justify-content: space-between;
    .mentions{
        display: flex;
        p{
            color: $h3Color ;
            font-size: 14px;
            margin-left: 10px;
            font-weight: 600;
            margin-bottom: 16px;
            span{
                font-size: 13px ;
                font-weight: 400;
                color: $hColor ; 
            }
            span.time{
                color:$spanColor ;
            }
        }

    }
}
/*
.new-photo{
    h4{
        font-size: 18px;
        color: ;
    }
    div.mentions{
        display: flex;
        a{

        }
    }
}
*/
</style>