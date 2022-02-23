<template>
    <div class="post-card">
        <div class="container-m">
            <UserPostBodyHead></UserPostBodyHead>
            <UserPostBodyText></UserPostBodyText>
            <div class="img-post">
                <img src="../../assets/images/post-img.jpg">
            </div>
            <UserPostBodyFooter></UserPostBodyFooter>
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
        overflow: hidden;
        margin-bottom: 15px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 14px;
        }
    }
}

</style>