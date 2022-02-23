<template>
    <div class="photos-post">
        <div class="container-m">
            <UserPostBodyHead></UserPostBodyHead>
            <UserPostBodyText></UserPostBodyText>
            <div class="img-content">
                <div class="img-post">
                    <img src="../../assets/images/img-post1.jpg">
                </div>
                <div class=" img-2">
                    <div class="img-post">
                        <img src="../../assets/images/img-post2.jpg">
                    </div>
                    <div class="img-post">
                        <img src="../../assets/images/img-post2.jpg">
                    </div>
                </div>
            </div>
            <UserPostBodyFooter></UserPostBodyFooter>
        </div>
    </div>
</template>
<style scoped lang="scss">
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
.photos-post{
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
    .img-content{
        width: 100%;
        margin: 10px auto;
        height: 400px;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
    }
    .img-post{
        width: 48%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            border-radius: 14px;    
        }
    }
    .img-2{
        width: 48%;
        .img-post{
            width: 100%;
            height: 48%;
            margin: 0px auto 15px;
        }
    }
}
</style>