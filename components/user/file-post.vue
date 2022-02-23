<template>
    <div class="file-post">
        <div class="container-m">
            <UserPostBodyHead></UserPostBodyHead>
            <UserPostBodyText></UserPostBodyText>
            <div class="files-content">
                <div class="file-box">
                    <img src="../../assets/images/png.png">
                    <p>Image Name.png <br> <span>23 May, 2022 at 10:10 4,5 Mb</span></p>
                </div>
                <div class="file-box">
                    <img src="../../assets/images/pdf.png">
                    <p>Document Name.pdf <br> <span>23 May, 2022 at 10:10 4,5 Mb</span></p>
                </div>
                <div class="file-box">
                    <img src="../../assets/images/txt.png">
                    <p>Text Document Name.txt <br> <span>23 May, 2022 at 10:10 4,5 Mb</span></p>
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
$spanColor:#aeb2bb;
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
.file-post{
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
    .files-content{
        width: 100%;
        line-height: 18px;
        margin: 10px auto;
        p{
            font-size:15px;
            font-weight: 500;
            margin-bottom: 0;
            color: $pColor;
            span{
                color:$spanColor
            }
        }
        .file-box{
            border-bottom: 1px solid $spanColor;
            display: flex;
            padding: 20px 0;
            img{
                width: 35px;
                height: 35px;
                margin-right: 15px;
                display: inline-block;
            }
        
        }
    }
}
</style>