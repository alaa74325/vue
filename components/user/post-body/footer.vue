<template>
    <div class="footer-post">
                <div class="post-icons">
                    <div class="inner-icon">
                        <n-link to=""><i class="uil uil-heart funcy-active"></i></n-link>
                        <n-link to=""><i class="uil uil-comment"></i></n-link>
                        <n-link to=""><i class="uil uil-share-alt"></i></n-link>
                    </div>
                    <n-link to=""><i class="uil uil-bookmark"></i></n-link>
                </div>
                <div class="who-liked">
                    <div class="box">
                        <n-link to=""><img src="../../../assets/images/user1.jpg"></n-link>
                        <n-link to=""><img src="../../../assets/images/user2.jpg"></n-link>
                        <n-link to=""><img src="../../../assets/images/user3.jpg"></n-link>
                        <n-link to=""><p>Liked by <span>hksdcaas</span> and<span> 500 others</span></p></n-link>
                    </div>
                </div>
                <div class="comment-area">
                </div>
            </div>
</template>
<style lang="scss" scoped>
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
a i.icon{
    color:$fancyColor;
    text-align: center;
    display: block;
    font-size: 23px;
}
.funcy-active{
    color:$fancyColor
}
.who-liked{
    .box{
        display: flex;
        margin-top: 15px;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border:2px solid #fff;
        }
        img:nth-child(1){
            display: inline-block;
            margin-left: -8px;
        }
        p{
            color:$hColor;
            margin-left: 10px;
            span{
                color: $h3Color !important;
                font-size: 17px;
                font-weight: 500;
            }
        }
    }
}
a{
    text-decoration: none !important;
}
.post-icons{
    display: flex;
    width: 100%;
    justify-content: space-between;
    .inner-icon{
        display: flex;
        a{
            margin-right: 15px;
        }
    }
    a{
        font-size: 24px;
        color: $h3Color;
    }
}
</style>