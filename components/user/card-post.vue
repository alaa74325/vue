<template>
    <div class="post-card">
        <div class="container-m">
            <div class="header-post">
                <div class="box">
                    <n-link to=""><img src="../../assets/images/user2.jpg"></n-link>
                    <n-link to=""><p>alaa<i class="uil uil-angle-double-right"></i>GroupName<br><span class="time">3 days ago</span></p></n-link>
                </div>
                <n-link to=""><i class="uil uil-ellipsis-h icon"></i></n-link>
            </div>
            <div class="text-post">
                <p>The main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.</p>
            </div>
            <div class="img-post">
                <img src="../../assets/images/post-img.jpg">
            </div>
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
                        <n-link to=""><img src="../../assets/images/user1.jpg"></n-link>
                        <n-link to=""><img src="../../assets/images/user2.jpg"></n-link>
                        <n-link to=""><img src="../../assets/images/user3.jpg"></n-link>
                        <n-link to=""><p>Liked by <span>hksdcaas</span> and<span> 500 others</span></p></n-link>
                    </div>
                </div>
                <div class="comment-area">

                </div>
            </div>
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
.post-card{
    width:100%;
    border-radius: 20px;
    background: #fff;
    margin-bottom: 20px;
    a{
        text-decoration: none !important;

    }
    .container-m{
        display: block;
        width: 92% !important;
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
    .text-post{
        width: 100%;
        p{
            font-size: 16px;
            color:$hColor;
        }
    }
    .img-post{
        width: 100%;
        height: 350px;
        border-radius: 7px;
        overflow: hidden;
        margin-bottom: 15px;
        img{
            width: 100%;
            height: 100%;
        }
    }
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